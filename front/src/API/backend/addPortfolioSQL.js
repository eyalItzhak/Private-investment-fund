import axios from "axios";
const http = "http://localhost:8080";

async function addPortfolioSQL(info) {
  const dataProcess = { "contract": info };
  const data = await axios
    .post(http + "/insertContract", {
      info: dataProcess,
    })
    .then((res) => {
      return res.data;
    });
  return data;
}

export default addPortfolioSQL;
