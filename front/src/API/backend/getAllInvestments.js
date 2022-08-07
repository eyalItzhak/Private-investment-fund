import axios from "axios";
const http = "http://localhost:8080";

async function getAllInvestments(address) {
  console.log("from get=>" + address);
  console.log("sent!");
  const data = await axios
    .post(http + "/getContractsInvestedStocks", {
      info: { contract: address },
    })
    .then((res) => {
      return res.data;
    });
  return data;
}

export default getAllInvestments;
