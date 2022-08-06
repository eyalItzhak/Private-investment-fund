const assert = require("assert"); //for the tests
const ganache = require("ganache"); //provider local network with 10 accounts
const Web3 = require("web3");

const provider = ganache.provider({
  logging: {
    logger: {
      log: () => {}, // don't do anything
    },
  },
});
const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5,
};
const web3 = new Web3(provider, null, OPTIONS);

const amaunt_whi = 10000000000000000000;
const gas = "1000000";

const { abi, evm } = require("../build/Inbox.json");
const { json } = require("mocha/lib/reporters");
const { finished } = require("stream");

let accounts;
let manager;
let site;
let days;
let minimal;
let inbox;
let name;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  site = accounts[0];
  manager = accounts[1];
  name = "ultimatePorfit";
  days = 1;
  minimal = 10;
  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
      arguments: [minimal, days, manager, site, name],
    })
    .send({ from: manager, gas: 5000000 });
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
      (share === (i + 1) * 18).toString || (share === (i + 1) * 18 + 1).toString
    ); //10 user so the invest ratio is 1,2,3,4,5.... so its mean the first user get 1.8%,the sec get 3.8%....the extra 0.1 pecent is the leftovers...
  }
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
});
