import instance from "./instance";
import web3 from "../../ethereum/web3";
import buySharesSQL from "../backend/buySharesSQL"
//import requestResponse from "./requestResponse"

async function requestExecuted(address,reqIndex,what,ammamunt) {
  const gas = "1000000";
  const accounts = await web3.eth.getAccounts();
  const user = accounts[0];
  const myInstance = instance(address);

  await myInstance.methods.executed_order_66(reqIndex).send({
    from: user,
    gas: gas,
  });
  console.log("buy share")
  await buySharesSQL(address,what,ammamunt);
}

export default requestExecuted;
