import axios from "axios";
import getContractInfo from "../ETH/getContractInfo";
import web3 from "../../ethereum/web3";
import sentMoneyToContreact from "../ETH/sentMoneyToContreact";
import getContractValueSQL from "./getContractTotalVal";

const http = "http://localhost:8080";

async function sellSharesSQL(what, ammamunt, address) {
  let info = await getContractInfo(address);
  const manager = info.manager;
  const accounts = await web3.eth.getAccounts();
  const user = accounts[0];
  if (user === manager) {
    console.log("sent ammount " + ammamunt);
    const data = await axios
      .post(http + "/sell", {
        sellInfo: { contract: address, symbol: what, quantity: ammamunt },
      })
      .then((res) => {
        return res.data;
      });
    sentMoneyToContreact(address, data.ETH);
    return data;
  } else {
    return false;
  }
}

export default sellSharesSQL;
