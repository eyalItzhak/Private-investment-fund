import axios from "axios";
const http = "http://localhost:8080";

async function getContractValueSQL(address) {
    console.log("from get=>"+ address)
    console.log("sent!")
  const data = await axios
    .get(http + "/getContractsValue", { 
       info : {contract:address},
   });
  return data;
}

export default getContractValueSQL;
