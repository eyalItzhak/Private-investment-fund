const assert = require("assert"); //for the tests
const ganache = require("ganache"); //provider local network with 10 accounts

const Web3 = require("web3");

const provider = ganache.provider();
const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5,
};
const web3 = new Web3(provider, null, OPTIONS);

const { abi, evm } = require("../build/campaigns.json");
const { json } = require("mocha/lib/reporters");
const { finished } = require("stream");

let contract;
let accounts;
let manager;
let site;
let days;
let minimal;
let peer;
let inbox;

beforeEach(async () => {
  // accounts = await web3.eth.getAccounts();
  // site = accounts[0];
  // manager = accounts[1];
  // days = 1;
  // minimal = 10;
  // console.log("Attempting to deploy factory from", site);
  // contract = await new web3.eth.Contract(abi)
  //   .deploy({
  //     data: evm.bytecode.object,
  //     arguments: [minimal, days, manager, site],
  //   })
  //   .send({ from: manager, gas: 5000000 });

  accounts = await web3.eth.getAccounts();
  manager = accounts[0];
  peer = accounts[1];
  console.log("Attempting to deploy from account", manager);
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [peer] })
    .send({ from: manager, gas: 5000000 });
});

describe("Simple tests", () => {
  const amaunt_whi = 100;
  const gas = "100000000000";

  // it("deploy a factory", async () => {
  //   const siteAddress = await contract.methods.site().call();
  //   const managerAddress = await contract.methods.manager().call();
  //   const minimumContribution = await contract.methods
  //     .minimumContribution()
  //     .call();

  //   assert.ok(siteAddress === site);
  //   assert.ok(managerAddress === manager);
  //   assert.ok(minimumContribution === minimal.toString());
  // });

  it("join users", async () => {
    await inbox.methods.getMoneyFrom().send({
      value: "" + amaunt_whi,
      from: peer,
      gas: gas,
    });
    
  });


});
