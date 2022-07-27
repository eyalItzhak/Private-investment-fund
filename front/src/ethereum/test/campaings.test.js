const assert = require("assert"); //for the tests
const ganache = require("ganache"); //provider local network with 10 accounts
const Web3 = require("web3");

const provider = ganache.provider({ 
  logging: {
    logger: {
      log: () => {} // don't do anything
    }
  }
});
const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};
const web3 = new Web3(provider, null, OPTIONS);

const { abi, evm } = require("../build/Inbox.json");
const { json } = require("mocha/lib/reporters");
const { finished } = require("stream");

let accounts;
let manager;
let site;
let days;
let minimal;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  site = accounts[0];
  manager = accounts[1];
  days = 1;
  minimal = 10;
 // console.log("Attempting to deploy from account", manager);
  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: [minimal, days, manager, site],
    })
    .send({ from: manager, gas: 5000000 });
});

describe("Simple tests", () => {
  const amaunt_whi = 10000000000000000000;
  const amaunt_eth = 2;
  const gas = "1000000";

  it("deploy a inbox", async () => {
    const siteAddress = await inbox.methods.site().call();
    const managerAddress = await inbox.methods.manager().call();
    const minimumContribution = await inbox.methods
      .minimumContribution()
      .call();

    assert.ok(siteAddress === site);
    assert.ok(managerAddress === manager);
    assert.ok(minimumContribution === minimal.toString());
    assert.ok(inbox.options.address);
  });

  //use case all work like intendents

  it("squence of work", async () => {
    //10 user ,diffrent ammount of investments...
    for (let i = 0; i < 10; i++) {
      await inbox.methods.join().send({
        value: "" + (amaunt_whi + amaunt_whi * i),
        from: accounts[i],
        gas: gas,
      });

      let investor = await inbox.methods.Investors(i).call();
      let invested = await inbox.methods.Investment(accounts[i]).call();
      assert.ok(investor === accounts[i]);
      assert.ok(invested === (amaunt_whi + amaunt_whi * i).toString());
    }
    //then mangager declare that join priod is close
    await inbox.methods.startContract().send({
      from: manager,
      gas: gas,
    });

    //chack if spilt the investor right
    for (let i = 0; i < 10; i++) {
      let share = await inbox.methods.ownPercent(accounts[i]).call();
      let isStakeHolder = await inbox.methods.Stakeholders(accounts[i]).call();

      if (i >= 6) {
        assert.ok(isStakeHolder);
      } else {
        assert.ok(!isStakeHolder);
      }
      assert.ok(
        (share === (i + 1) * 18).toString ||
          (share === (i + 1) * 18 + 1).toString
      ); //10 user so the invest ratio is 1,2,3,4,5.... so its mean the first user get 1.8%,the sec get 3.8%....the extra 0.1 pecent is the leftovers...
    }
    //create a new requsts...
    let valSent1 = 200000;
    await inbox.methods.makeNewRequset("stock1", "res1", valSent1).send({
      from: manager,
      gas: gas,
    });

    let req = await inbox.methods.myRequsts(0).call();
    assert.ok(req.description == "res1");
    assert.ok(req.what == "stock1");
    assert.ok(req.value == valSent1.toString());

    await inbox.methods.makeNewRequset("stock2", "res2", 1000).send({
      from: manager,
      gas: gas,
    });

    req = await inbox.methods.myRequsts(1).call();
    assert.ok(req.description == "res2");
    assert.ok(req.what == "stock2");
    assert.ok(req.value == "1000");

    //3/4 stackHolders aproves
    await inbox.methods.approveRequest(0).send({
      from: accounts[9],
      gas: gas,
    });
    await inbox.methods.approveRequest(0).send({
      from: accounts[8],
      gas: gas,
    });
    await inbox.methods.approveRequest(0).send({
      from: accounts[7],
      gas: gas,
    });
    assert.ok(await inbox.methods.isStakeholdersApprove(0, accounts[9]).call());
    assert.ok(await inbox.methods.isStakeholdersApprove(0, accounts[8]).call());
    assert.ok(await inbox.methods.isStakeholdersApprove(0, accounts[7]).call());
    assert.ok(
      !(await inbox.methods.isStakeholdersApprove(0, accounts[6]).call())
    );
    //excuted the request
    req = await inbox.methods.myRequsts(0).call();
    assert.ok(!req.complete);
    // console.log("###"+req.value)
    let sitBalanceBefor = await web3.eth.getBalance(site);
    await inbox.methods.executed_order_66(0).send({
      from: manager,
      gas: gas,
    });
    req = await inbox.methods.myRequsts(0).call();
    let sitBalanceAfter = await web3.eth.getBalance(site);

    //console.log("******befor="+(Number(sitBalanceBefor))+"\n*******afte="+Number(sitBalanceAfter) );
    assert.ok(parseInt(sitBalanceBefor) < parseInt(sitBalanceAfter)); //money go to the site =>backend need process the rquset

    //first user leave before end of contract => no stackholder
    // let contractBalanceBefore=await web3.eth.getBalance(inbox.options.address);
    // let accoutn2BalanceBefore=await web3.eth.getBalance(accounts[2]);
    let account_9_percentBefor = await inbox.methods
      .ownPercent(accounts[9])
      .call();
    //let account_2_pecentBefor=await inbox.methods.ownPercent(accounts[2]).call()
    await inbox.methods.leave_contract(accounts[2], 1000000000).send({
      from: site,
      gas: gas,
    });
    let account_9_percentAfter = await inbox.methods
      .ownPercent(accounts[9])
      .call();
    assert.ok(
      parseInt(account_9_percentBefor) + 10 === parseInt(account_9_percentAfter)
    ); //account_9_percentBefor=181,account_9_percentAfter=191,account 2 that left have 54 =>181*1000/1000-54=new_pececnt.
    // console.log("after:!!!"+account_9_percentAfter+ "before:!!!"+account_9_percentBefor);
    // console.log("befor account 2:=>"+account_2_pecentBefor);
    // let contractBalanceAfter=await web3.eth.getBalance(inbox.options.address);
    // let accoutn2BalanceAfter=await web3.eth.getBalance(accounts[2]);
    // let val = await inbox.methods.lastTotalVal().call();
    // let total_val = await inbox.methods.lastRePay().call();
    // let per = await inbox.methods.ownPercent(accounts[2]).call();
    // console.log("******myval "+val+"******");
    // console.log("******myPecent: "+per)
    // console.log("******myTotalVal "+total_val+"******");
    // console.log("contract balance ="+contractBalanceBefore);
    // console.log("contract balance after ="+contractBalanceAfter);
    // console.log("account balance ="+accoutn2BalanceBefore);
    // console.log("account balance after ="+accoutn2BalanceAfter);
    assert.ok(inbox.methods.Stakeholders_endTheContract(accounts[2]).call());
    //payday excuded
    let accoutnsBalancesBefore = [];
    let accoutnsBalancesAfter = [];

    await inbox.methods.PayDayVoted().send({
      from: accounts[9],
      gas: gas,
    });
    await inbox.methods.PayDayVoted().send({
      from: accounts[8],
      gas: gas,
    });
    //50% not from Stakeholders dosent wants to contion...

    for (let i = 0; i < 10; i++) {
      accoutnsBalancesBefore.push(await web3.eth.getBalance(accounts[i]));
    }

    let contractBalance = await web3.eth.getBalance(inbox.options.address);
    let balance = await inbox.methods.investorBalanc().call();

    await inbox.methods.payDay().send({
      from: site,
      gas: gas,
    });
    let managerFee = await inbox.methods.managerFineFee().call();
    //let total_percent = await inbox.methods.allInvestorPercent().call();

    let rasio = parseFloat(managerFee) / parseFloat(contractBalance); //manager get 10% extra
    assert.ok(rasio <= 0.11);
    assert.ok(rasio >= 0.09);
    for (let i = 0; i < 10; i++) {
      accoutnsBalancesAfter.push(await web3.eth.getBalance(accounts[i]));
      if (i != 2) {
        //2 is the only one how left before....
        assert.ok(
          parseInt(accoutnsBalancesAfter[i]) >
            parseInt(accoutnsBalancesBefore[i])
        );
      } else {
        assert.ok(
          parseInt(accoutnsBalancesAfter[i]) ===
            parseInt(accoutnsBalancesBefore[i])
        );
      }
    }
  });
});
