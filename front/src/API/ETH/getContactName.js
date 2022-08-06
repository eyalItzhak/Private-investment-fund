import instance from "./instance";

async function getContractName(address) {

  const myInstance = instance(address);
  const name = await myInstance.methods.name().call();
  return name;
}
export default getContractName;
