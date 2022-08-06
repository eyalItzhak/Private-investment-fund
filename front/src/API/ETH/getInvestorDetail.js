import web3 from "../../ethereum/web3";
// import { abi, evm } from "../../ethereum/build/Inbox.json";
import instance from "./instance";
import getRank from "./getRank";

async function getInvestorDetails(address) {
  const accounts = await web3.eth.getAccounts();
  const user = accounts[0];
  const myInstance = instance(address);
  const invest = await myInstance.methods.Investment(user).call();
  const share = await myInstance.methods.ownPercent(user).call();
  const rank = await getRank(address);

  const data = {
    invest: invest,
    share: share,
    rank: rank,
  };
  return data;
}

export default getInvestorDetails;
