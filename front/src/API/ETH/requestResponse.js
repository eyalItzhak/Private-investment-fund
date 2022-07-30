//import factory from "../../ethereum/factory";
import instance from "./instance";
import web3 from "../../ethereum/web3";

async function requestResponse(address,reqIndex,reqResponse) {
  const gas = "1000000";
  const accounts = await web3.eth.getAccounts();
  const user = accounts[0];
  const myInstance = instance(address);

  await myInstance.methods.approveRequest(reqIndex,reqResponse).send({
    from: user,
    gas: gas,
  });

}


export default requestResponse;
