import instance from "./instance";
import web3 from "../../ethereum/web3";

async function makeNewRequest(what, why, val,address) {
  const gas = "1000000";
  const accounts = await web3.eth.getAccounts();
  const user = accounts[0];
  const myInstance = instance(address);
  await myInstance.methods.makeNewRequset(what,why,val).send({
    from: user,
    gas: gas,
  });
}

export default makeNewRequest;
