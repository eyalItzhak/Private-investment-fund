const yahooStockAPI = require("yahoo-stock-api");
const { getEthPriceNow, getEthPriceHistorical } = require("get-eth-price");



async function getEthInUsd() {
  const us = await getEthPriceNow().then(async (data) => {
    var firstKey = Object.keys(data);
    console.log(firstKey);
    var secondKey = data[firstKey].ETH;
    var usd = secondKey.USD;
    console.log(usd);
    return usd;
  });
  console.log(us)
  return us;
}

async function getStocksCloseArray(symbols) {
  console.log(symbols + "BBBBB");
  var stocksClose = {};
  for (let i = 0; i < symbols.length; i++) {
    let info = await yahooStockAPI.getSymbol(symbols[i]);
    var symbol = symbols[i];
    stocksClose[symbols[i]] = info.response.previousClose;
  }
  return JSON.stringify(stocksClose);
}
// module.exports = { getStocksCloseArray };

function getStockCloseNow(stockCloseDict, symbol) {
  var obj = JSON.parse(stockCloseDict);
  return obj[symbol];
}
module.exports = { getStockCloseNow, getStocksCloseArray, getEthInUsd };