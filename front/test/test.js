const { getEthPriceNow, getEthPriceHistorical } = require("get-eth-price");



async function name() {
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

console.log(name());