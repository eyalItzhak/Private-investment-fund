import web3 from "./web3_site";
import { abi } from "../../ethereum/build/Inbox.json";

//console.log(Inbox)
function instance(address) {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
}
export default instance;