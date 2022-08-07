//import instance from "./instance";
import web3 from "../../ethereum/web3";
import web3_site from "./web3_site";
import instance_site from "./instance_site";
//import requestResponse from "./requestResponse"
import getContractTotalVal from "../backend/getContractTotalVal";

async function redraw(address) {
  console.log("leave from =>" + address);
  const gas = "1000000";
  const accounts_site = await web3_site.eth.getAccounts();
  const accounts_user = await web3.eth.getAccounts();
  const myInstance = instance_site(address);
  console.log("leave:" + accounts_user);
  console.log("site:" + accounts_site[0]);
  const shareVal = await getContractTotalVal(address);
  console.log("sadasd")
  console.log(shareVal.totalContractValueETH);
  await myInstance.methods.leave_contract(accounts_user[0], Number(shareVal.totalContractValueETH).toFixed(0)).send({
    from: accounts_site[0],
    gas: gas,
  });
}

export default redraw;
