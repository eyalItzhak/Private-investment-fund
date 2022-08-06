const HDWalletProvider = require("@truffle/hdwallet-provider"); //provider to connect to some eth network
const Web3 = require("web3"); //interface

const provider = new HDWalletProvider( //make the connection to wallet and to real eth node (in this case rinkeby)
  "then case hidden turtle amateur purity alpha rain run poem spike tone", //account "refs" (not exact...)
  "https://rinkeby.infura.io/v3/dc652a5224e2444ab7fc29fe16934889"
);

const web3_site=  new Web3(provider); //connect web3 to eth node , connect with the account "refs"

export default web3_site;