import web3 from "../../ethereum/web3";
// import { abi, evm } from "../../ethereum/build/Inbox.json";
import instance from "./instance";
// import getContractValueSQL from "../backend/getContractValueSQL"
//  import getContractTotalvAL from "../backend/getContractTotalVal"

const myDate = function dateFormat(timestamp) {
  let unix_timestamp = timestamp;
  var date = new Date(unix_timestamp * 1000);
  var year = date.getFullYear();
  var mounth = date.getMonth() + 1;
  var day = date.getDate();
  var formattedTime = day + "/" + mounth + "/" + year;
  return formattedTime;
};

async function getContractInfo(address) {
  //console.log("get " + address);
  const myInstance = instance(address);
  const myAddres = address;
  const manager = await myInstance.methods.manager().call();
  const numInvestor = await myInstance.methods.numOfInvestors().call();

  let index = 0;
  let listOfStakeholders = [];
  while (index < numInvestor) {
    let tempAddress = await myInstance.methods.Investors(index).call();
    let isLeft = await myInstance.methods.lefted(tempAddress).call();
    if (!isLeft) {
      index++;
      let isStakeholders = await myInstance.methods
        .Stakeholders(tempAddress)
        .call();
      if (isStakeholders) {
        listOfStakeholders.push(tempAddress);
      }
    }
  }


  //const repaymentVote= await myInstance.methods.endTheContract_numOfVote().call();need to deploy new contract
  const timeCreate = await myInstance.methods.timeStart().call();
  const timeToJoin = await myInstance.methods.timeToJoin().call();
  const timeEnd = await myInstance.methods.timeEnd().call();

  const reserve = await web3.eth.getBalance(myInstance.options.address);


  const voteYes = await myInstance.methods.endTheContract_numOfVote().call();
  const count = await myInstance.methods.numStakeholders().call();
  const endContractVote=voteYes + "/" + count;
  
  const canBuy=await myInstance.methods.canBuy().call();

  //no eth raltion ... 
//  const shareValue = getContractValueSQL(address);
//  const total_Val= await getContractTotalvAL(address);

  const mini=await myInstance.methods.minimumContribution().call();

  const data = {
    address: myAddres,
    manager: manager,
    numInvestor: numInvestor,
    listOfStakeholders: listOfStakeholders,
    timeCreate: myDate(timeCreate),
    timeToJoin: myDate(timeToJoin),
    timeEnd: myDate(timeEnd),
    reserve:reserve,
    vote:endContractVote,
    canBuy:canBuy,
    minimal:mini
   // shareValue:shareValue
  };

  return data;
}

export default getContractInfo;
