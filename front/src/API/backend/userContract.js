import web3 from "../../ethereum/web3";
import instance from "../ETH/instance";
import getAllContract from "./getAllContract"

async function userContract() {
 
    const accounts = await web3.eth.getAccounts();
    const user = accounts[0];
    console.log(user);
    let user_contract=[];
    const all=await getAllContract();

    for (let obj of all){
        let myInstance= instance(obj.contract);
        let invested = await myInstance.methods.Investment(user).call();
        let manager = await myInstance.methods.manager().call();
        if(invested>0||manager===user){
            user_contract.push(obj);
        }
    }
    return user_contract
}



export default userContract;