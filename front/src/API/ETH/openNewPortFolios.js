//import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { abi, evm } from "../../ethereum/build/Inbox.json";



async function openNewPortFolios(minimal,daysForStart,name) {
  
 
    const accounts = await web3.eth.getAccounts();
    const manager = accounts[0];
    const site= "0xdc42E3Ba842781923d2b51816da93Ab95b25Ca2b"; //our site 
    console.log(name);
    const inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [minimal,daysForStart,manager,site,name] })
    .send({ from: manager, gas: 5000000 });
    
    console.log("*********deployed address*************");
    console.log("Contract deployed to", inbox.options.address);
    return  inbox.options.address;
  
}

export default openNewPortFolios;
