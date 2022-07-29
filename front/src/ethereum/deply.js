

const HDWalletProvider = require("@truffle/hdwallet-provider"); //provider to connect to some eth network
const Web3 = require("web3"); //interface
const { abi, evm } = require("./build/Inbox.json");

const provider = new HDWalletProvider( //make the connection to wallet and to real eth node (in this case rinkeby)
  "then case hidden turtle amateur purity alpha rain run poem spike tone", //account "refs" (not exact...)
  "https://rinkeby.infura.io/v3/dc652a5224e2444ab7fc29fe16934889"
);

const web3 = new Web3(provider); //connect web3 to eth node , connect with the account "refs"

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const site = accounts[0];
  const manager = "0xF4095CFBeDa57daF61B0921D5856c97a270a91fF";

  console.log("Attempting to deploy from account", manager);
  const inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [22,1,site,manager] })
    .send({ from: manager, gas: 5000000 });

    console.log("*********deployed address*************");
    console.log("Contract deployed to", inbox.options.address);
};

deploy(); 
  