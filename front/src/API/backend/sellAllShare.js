import axios from "axios";
import getContractInfo from "../ETH/getContractInfo";
import sentMoneyToContreact from "../ETH/sentMoneyToContreact"
import getContractTotalVal from "./getContractTotalVal"
const http = "http://localhost:8080";

async function sellAllShares(address) {

  let info = await getContractInfo(address);


  const ammaunt= await getContractTotalVal(address);
  console.log("sell!!!!!!!!!!! alll!!!!!! =?>>>>>"+ammaunt);
  sentMoneyToContreact(address,ammaunt);

  const data = await axios
      .post(http + "/deleteContractFromDB", {
        info: { contract: address},

      })
      .then((res) => {
        return res.data;
      });


    return data;

}

export default sellAllShares;
