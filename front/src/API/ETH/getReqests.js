import instance from "./instance";

async function getReqests(address) {
  let req_list = [];
  const myInstance = instance(address);
  const reqSize = await myInstance.methods.listSize().call();
  for (let i = 0; i < reqSize; i++) {
    let req = await myInstance.methods.myRequsts(i).call();
    req_list.push(req);
  }

  console.log(req_list);
  return req_list;
}
export default getReqests;
