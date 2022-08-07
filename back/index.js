const express = require("express");
const {
  getStockCloseNow,
  getStocksCloseArray,
  getEthInUsd,
} = require("./utils.js");
const yahooStockAPI = require("yahoo-stock-api");
const { getEthPriceNow, getEthPriceHistorical } = require("get-eth-price");

//mysql
let mysql = require("mysql2");
let config = require("./config.js");
let connection = mysql.createConnection(config);

const {
  insertToMySql,
  updateQuantityMySql,
  deleteContractfromMySql,
  insertContract,
  getAllContracts,
} = require("./utils_mysql");

const app = express();
const PORT = 8080;

var cors = require("cors"); //can access from localhost!
const { request } = require("express");

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

//get the close value of the the stock in $
app.get("/getStocksCloseArray", async (req, res) => {
  const { symbols } = req.body;
  var stocksClose = await getStocksCloseArray(symbols);
  res.send(stocksClose);
});

app.post("/insertContract", (req, res) => {
  const { info } = req.body;
  console.log(info);
  var contract = info.contract;
  console.log(contract);
  insertContract(contract);

  res.send({ success: true });
});

app.get("/getAllContracts", (req, res) => {
  let sql = `SELECT * FROM contracts`;

  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.send(results);
  });
  connection.end();
});

app.post("/purchase", async (req, res) => {
  const { purchaseInfo } = req.body;
  const contract = purchaseInfo.contract;
  const symbol = purchaseInfo.symbol;
  const eth = purchaseInfo.eth;

  var stockCloseDict = await getStocksCloseArray([symbol]);
  var stocksCloseNow = getStockCloseNow(stockCloseDict, symbol);

  var ethInUsd = await getEthInUsd();
  var quantityApproved = parseInt((eth * ethInUsd) / stocksCloseNow);
  var approvePurchase = quantityApproved >= 1;

  if (approvePurchase) {
    //check if a row with contract-symbol exists in the db
    let sql = `SELECT 1 FROM contracts_stocks WHERE contract= ? AND symbol=? AND purchase_rate=?`;
    let data = [contract, symbol, stocksCloseNow];

    connection.query(sql, data, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      if (results == 0) {
        //if there is 0 rows, its a new contract-symbol-> insert row
        insertToMySql(contract, symbol, stocksCloseNow, quantityApproved);
        res.send("Successfully purchased.");
      } else {
        updateQuantityMySql(quantityApproved, contract, symbol);
        res.send("Successfully purchased.");
      }
    });
    // connection.end();
  } else {
    res.send("not enough money to purchase even 1 stock.");
  }
});

app.post("/sell", async (req, res) => {
  const { sellInfo } = req.body;

  const contract = sellInfo.contract;
  const symbol = sellInfo.symbol;
  const quantity = sellInfo.quantity;

  var stockCloseDict = await getStocksCloseArray([symbol]);
  var stocksCloseNow = getStockCloseNow(stockCloseDict, symbol);

  var totalUSD = quantity * stocksCloseNow;

  var ethInUsd = await getEthInUsd();

  var totalETH = totalUSD / ethInUsd;

  let sql = `SELECT quantity FROM usersdb.contracts_stocks where contract =? AND symbol = ?`;
  let data = [contract, symbol];

  connection.query(sql, data, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    if (results == 0) {
      res.send("No such contract");
    } else {
      var currentQuantity = results[0].quantity;
      var updatedQuantity = currentQuantity - quantity;
      if (updatedQuantity <= 0) {
        deleteContractfromMySql(contract, symbol);
        res.send({ ETH: totalETH });
      } else {
        updateQuantityMySql(-quantity, contract, symbol);
        res.send({ ETH: totalETH });
      }
    }
  });

  // connection.end();
});

app.post("/getContractsInvestedStocks", (req, res) => {
  const { info } = req.body;
  var contract = info.contract;

  let sql = `SELECT * FROM contracts_stocks where contract = ?`;

  connection.query(sql, contract, async (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    for (let i = 0; i < results.length; i++) {
      var stockCloseDict = await getStocksCloseArray([results[i]["symbol"]]);
      var stocksCloseNow = getStockCloseNow(
        stockCloseDict,
        results[i]["symbol"]
      );
      results[i]["currentRate"] = stocksCloseNow;
    }

    res.send(results);
  });
  // connection.end();
});

app.post("/getContractsValue", (req, res) => {
  const { info } = req.body;
  var contract = info.contract;

  let sql = `SELECT symbol, quantity 
  FROM usersdb.contracts_stocks 
  where contract = ?`;

  connection.query(sql, contract, async (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    var totalContractValueUSD = 0;
    for (let i = 0; i < results.length; i++) {
      var stockCloseDict = await getStocksCloseArray([results[i]["symbol"]]);
      var stocksCloseNow = getStockCloseNow(
        stockCloseDict,
        results[i]["symbol"]
      );
      var totalSymbolValue = stocksCloseNow * results[i]["quantity"];
      totalContractValueUSD = totalContractValueUSD + totalSymbolValue;
    }
    var ethInUsd = await getEthInUsd();
    var totalContractValueETH = totalContractValueUSD / ethInUsd;
    res.send({ totalContractValueETH: totalContractValueETH });
  });
  // connection.end();
});

app.post("/deleteContractFromDB", (req, res) => {
  const { info } = req.body;
  console.log(info);
  var contract = info.contract;

  let sql = `DELETE FROM contracts_stocks
  WHERE contract=?`;

  connection.query(sql, contract, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.send("Deleted Successfully");
  });
});
