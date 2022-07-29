//return a instance that we can intract withe the deplyed conract .... "0x2a..." is the adrees of the contract we want to intract with.
import web3 from "../../ethereum/web3";
import { abi } from "../../ethereum/build/Inbox.json";

//console.log(Inbox)
function getUserInstance(address) {
    console.log(address);
  const instance = new web3.eth.Contract(abi, address);
  return instance;
}
export default getUserInstance;
