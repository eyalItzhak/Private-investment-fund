//import instance from "./instance";
import web3 from "../../ethereum/web3";
import web3_site from "./web3_site";
import instance_site from "./instance_site"
import sellAllShares from "../backend/sellAllShare";

//import requestResponse from "./requestResponse"

async function payDay(address) {
  const gas = "1000000";
  const accounts_site = await web3_site.eth.getAccounts();
  const accounts_user = await web3.eth.getAccounts();
  const myInstance = instance_site(address);
  sellAllShares(address);
  await myInstance.methods.payDay().send({
    from: accounts_site[0],
    gas: gas,
  });
  console.log("end");
}

export default payDay;
