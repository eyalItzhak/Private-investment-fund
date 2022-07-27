//if we can use metamsk as provider we use it , else we use infura metamsk

import Web3 from "web3";
 
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {  
  // We are in the browser and metamask is running.
  console.log("metamask")
  window.ethereum.request({ method: "eth_requestAccounts" }); //window defined if used browser and the browser give =>window
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/dc652a5224e2444ab7fc29fe16934889"
  );
  web3 = new Web3(provider);
}
 
export default web3;