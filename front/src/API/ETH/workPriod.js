import instance from "./instance";
import web3 from "../../ethereum/web3";

async function workPriod(address) {

    const gas = "1000000";
    const accounts = await web3.eth.getAccounts();
    const user = accounts[0];
    const myInstance = instance(address);

    await myInstance.methods.startContract().send({
        from: user,
        gas: gas, });
  }

  export default workPriod;