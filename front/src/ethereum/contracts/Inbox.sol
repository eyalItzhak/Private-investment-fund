// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

contract basic {
    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }

    modifier onlyStakeholders() {
        require(Stakeholders[msg.sender]);
        _;
    }

    modifier onlySite() {
        require(msg.sender == site);
        _;
    }

    modifier JoinPeriod() {
        require(canBuy == false);
        _;
    }

    modifier WorkPeriodSetUp() {
        //for cheak we set up || for cheak and move for workpriod time
        require((canBuy == false));
        _;
    }

    modifier workPeriod() {
        require((canBuy == true));
        _;
    }
    modifier EndPeriod() {
        require(
            (endTheContract_numOfVote >= numStakeholders / 2) || canBuy == false
        );
        _;
    }

    struct Request {
        string description;
        string what;
        uint value;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    uint penelty = 800; // 800/1000 that what his get
    uint manager_fee = 100; //get 10%
    uint days_start = 20;
    uint numStakeholders = 4;
    //*******************************
    address public manager;
    address public site;
    mapping(address => bool) public Stakeholders;
    mapping(address => bool) public Stakeholders_endTheContract;
    uint endTheContract_numOfVote = 0;
    address[] public Investors;
    mapping(address => uint) public Investment;
    mapping(address => uint) public ownPercent; // ex 50 = 5% , 2 = 0.2% ...
    mapping(address => bool) public lefted;
    uint public minimumContribution;
    //*******************************
    uint256 public timeStart;
    uint256 public timeToJoin;
    uint256 public timeEnd;
    bool canBuy;
    //******************************
    Request[] public myRequsts;

    //for debug
    uint public lastRePay;
    uint public lastTotalVal;
    uint public managerFineFee;
    uint public the_balance;
    uint public lastLeaveVal;

    function allInvestorPercent() public view returns (uint) {
        uint sum;
        for (uint i = 0; i < Investors.length; i++) {
            address user = Investors[i];
            if (lefted[user] == false) {
                sum = sum + ownPercent[user];
            }
        }
        return sum;
    }

    //****************//
    constructor(
        uint minimum,
        uint256 num_days,
        address creator,
        address sentTo
    ) {
        site = sentTo;
        manager = creator;
        minimumContribution = minimum;
        timeStart = block.timestamp;
        timeEnd = block.timestamp + (num_days * 1 days);
        timeToJoin = block.timestamp + (days_start * 1 days);
        canBuy = false;
    }

    function investorBalanc() public view returns (uint) {
        return ((address(this).balance)*(1000-manager_fee)/1000);
    }

    function join() public payable JoinPeriod {
        uint myInvest = Investment[msg.sender];
        if (myInvest == 0) {
            require(msg.value >= minimumContribution);
            Investors.push(msg.sender);
        }
        Investment[msg.sender] = myInvest + msg.value;
    }

    function getMoney() public payable returns (bool) {
        return true;
    }

    function startContract() public {
        canBuy = true;
        uint totalVal = address(this).balance;
        //   uint p_val = totalVal / 1000;
        uint ammunt;
        for (uint i = 0; i < Investors.length; i++) {
            address temp_investor = Investors[i];
            ammunt = Investment[temp_investor];
            ownPercent[temp_investor] = ((((ammunt) * 1000) / totalVal)); //127 =12.7%...
        }
        setStakeholders();
    }

    function setStakeholders() private {
        address[] memory address_temp = new address[](numStakeholders);
        uint[] memory value_temp = new uint[](numStakeholders);
        uint min;
        uint pos = 0;
        uint temp_val;
        address temp = Investors[0];
        address_temp[0] = temp;
        min = Investment[temp];
        value_temp[0] = min;
        for (uint i = 1; i < numStakeholders; i++) {
            //-1 =>one is the manager....one is the first
            temp = Investors[i]; //get accoutn
            address_temp[i] = temp; //set account to posion
            temp_val = Investment[temp]; //get his contrebutions
            value_temp[i] = temp_val; //set his value
            if (min > temp_val) {
                min = temp_val;
                pos = i;
            }
        }

        for (uint i = numStakeholders; i < Investors.length; i++) {
            temp = Investors[i]; //get investor
            temp_val = Investment[temp]; //get his value;

            if (temp_val > min) {
                address_temp[pos] = temp;
                value_temp[pos] = temp_val;
                min = temp_val;
                for (uint j = 0; j < numStakeholders; j++) {
                    if (value_temp[j] < min) {
                        min = value_temp[j];
                        pos = j;
                    }
                }
            }
        }

        for (uint i = 0; i < numStakeholders; i++) {
            Stakeholders[address_temp[i]] = true;
        }
    }

    function isStakeholdersApprove(uint reqId, address user)
        public
        view
        returns (bool)
    {
        Request storage req = myRequsts[reqId];
        return req.approvals[user];
    }

    function makeNewRequset(
        string memory what,
        string memory why,
        uint value
    ) public onlyManager {
        Request storage newRequest = myRequsts.push();
        newRequest.description = why;
        newRequest.value = value;
        newRequest.what = what;
    }

    function approveRequest(uint index) public onlyStakeholders {
        //need to cheak is stackholder
        Request storage request = myRequsts[index];
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function executed_order_66(uint index)
        public
        workPeriod
        onlyManager
        returns (bool)
    {
        Request storage request = myRequsts[index];
        require(request.approvalCount >= uint256(numStakeholders / 2));
        payable(site).transfer(request.value);
        request.complete = true;
        return true;
    }

    function leave_contract(
        address leave_address,
        uint yield //get the total value of the portfolios (yield)
    ) public workPeriod onlySite returns (bool) {
        require(Stakeholders[msg.sender] == false); //currently Stakeholders cannot leave =>if we want to implement that stakeholder can leave we need to caculate who is the next stakholder in line....
        uint myPercent = ownPercent[leave_address];
        uint totalValue = yield + investorBalanc();
        uint value = ((((totalValue * myPercent) / 1000) * penelty) / 1000);
        lastTotalVal = value;
        if (value <= address(this).balance) {
            lastLeaveVal=lastTotalVal; //for debug
            payable(leave_address).transfer(value);
            lefted[leave_address] = true;
            lastRePay = value;
            fixPercent(myPercent);
            return true;
        } else {
            return false;
        }
    }

    function fixPercent(uint leftPercent) private {
        uint totalPercented = 1000 - leftPercent;
        for (uint i = 0; i < Investors.length; i++) {
            address user = Investors[i];
            if (lefted[user] == false) {
                uint newVal = ((ownPercent[user] * 1000) / totalPercented);
                ownPercent[user] = newVal;
            }
        }
    }

    function PayDayVoted() public workPeriod onlyStakeholders {
        if (Stakeholders_endTheContract[msg.sender] == false) {
            Stakeholders_endTheContract[msg.sender] = true;
            endTheContract_numOfVote++;
        }
        if (endTheContract_numOfVote >= numStakeholders / 2) {
            canBuy = false;
        }
    }

    function payDay() public EndPeriod onlySite {
       // uint sum;
        the_balance =investorBalanc() ;
        for (uint i = 0; i < Investors.length; i++) {
            address investor = Investors[i];
            if (lefted[investor] == false) {
                uint myPercent = ownPercent[investor];
                uint value = (myPercent * the_balance) / 1000;
                payable(investor).transfer(value);
                //sum=sum+value;
            }
        }
        managerFineFee = address(this).balance;
        payable(manager).transfer(managerFineFee); //all what left is his manger share..
        
    }
}
