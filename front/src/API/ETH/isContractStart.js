import instance from "./instance";

async function isContractStart(address) {

  const myInstance = instance(address);
  const canBuy = await myInstance.methods.canBuy().call();

  console.log(canBuy);
  return canBuy;
}
export default isContractStart;
