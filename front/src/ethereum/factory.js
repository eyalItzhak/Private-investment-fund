//return a instance that we can intract withe the deplyed conract .... "0x2a..." is the adrees of the contract we want to intract with.
import web3 from "./web3";
import Inbox from "./build/Inbox.json"

//console.log(Inbox)

const instance = new web3.eth.Contract(
    Inbox.abi,
   "0x2a45d7911a9f973D8960D3c2d2984781c392EfF3"
);

 export default instance;
