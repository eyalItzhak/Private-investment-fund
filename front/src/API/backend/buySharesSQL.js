import axios from "axios";
const http = "http://localhost:8080";

async function buySharesSQL(address, what, ammamunt) {
  console.log("sent ammount " + ammamunt);
  const data = await axios
    .post(http + "/purchase", {
      purchaseInfo: { contract: address, symbol: what, eth: ammamunt },
    })
    .then((res) => {
      return res.data;
    });
  return data;
}

export default buySharesSQL;
