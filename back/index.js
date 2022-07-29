const express = require("express");
//const yahooStockAPI = require("yahoo-stock-api");

//mysql
let mysql = require("mysql2");
let config = require("./config.js");
let connection = mysql.createConnection(config);
const {insertToMySql, updateQuantityMySql, deleteContractfromMySql, insertContract, getAllContracts} = require("./utils_mysql");


const app = express();
const PORT = 8080;

var cors = require("cors"); //can access from localhost!
const { request } = require("express");

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));



app.post("/insertContract",(req, res)=>{
  const{info} = req.body;
  console.log("from server:  "+  info);
  var contract = info.contract;
  console.log(contract);
  insertContract(contract);

  res.send({ success: true });
});

app.get("/getAllContracts", (req, res) =>{
  let sql = `SELECT * FROM contracts`;
  
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.send(results);
  });
 // connection.end();
});

