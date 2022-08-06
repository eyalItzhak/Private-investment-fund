import instance from "./instance";
import web3 from "../../ethereum/web3";
//import requestResponse from "./requestResponse"

async function Repayment(address) {
  const gas = "1000000";
  const accounts = await web3.eth.getAccounts();
  const user = accounts[0];
  const myInstance = instance(address);

  await myInstance.methods.PayDayVoted().send({
    from: user,
    gas: gas,
  });

}

export default Repayment;