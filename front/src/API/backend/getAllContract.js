import axios from "axios";
const http = "http://localhost:8080";

async function GetAllContract(info) {
  const data = await axios.get(http + "/getAllContracts", {}).then((res) => {
    console.log(res.data);
    return res.data;
  });
  return data;
}

export default GetAllContract;
