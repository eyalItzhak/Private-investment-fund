import web3 from "../../ethereum/web3";
// import { abi, evm } from "../../ethereum/build/Inbox.json";
import instance from "./instance";

async function getRank(address) {
  const accounts = await web3.eth.getAccounts();
  const title = [];
  const user = accounts[0];
  const myInstance = instance(address);
  const left = await myInstance.methods.lefted(user).call();
  const manager = await myInstance.methods.manager().call();
  const isStakeholders = await myInstance.methods.Stakeholders(user).call();
  if (left) {
    title.push("left");
  } else {
    title.push("investor");

    if (isStakeholders) {
      title.push("Stakeholders");
    }
    if (manager === user) {
      title.push("manager");
    }
  }

  return title;
}

export default getRank;
