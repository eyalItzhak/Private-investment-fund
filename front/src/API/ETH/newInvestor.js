import instance from "./instance";
import web3 from "../../ethereum/web3";

async function newInvestor(invest,address) {

    const gas = "1000000";
    const accounts = await web3.eth.getAccounts();
    const user = accounts[0];
    const myInstance = instance(address);

    // console.log("to => "+address)
    // console.log("from => "+accounts[0])
    // console.log("ammount => "+invest)

    await myInstance.methods.join().send({
        value: "" + (invest),
        from: user,
        gas: gas, });
  }

  export default newInvestor;