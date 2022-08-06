import instance from "./instance";

async function getendTheContract(address) {
  const myInstance = instance(address);
  const voteYes = await myInstance.methods.endTheContract_numOfVote().call();
  const count = await myInstance.methods.numStakeholders().call();
  return count + "/" + voteYes;
}
export default getendTheContract;
