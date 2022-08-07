
import web3_site from "./web3_site";
import instance_site from "./instance_site";

async function sentMoneyToContreact(address,value) { //from site... ge whi ...cannot handel 0.=>after dot
  console.log("leave from =>" + address);
  const gas = "1000000";
  const accounts_site = await web3_site.eth.getAccounts();
  const myInstance = instance_site(address);

  await myInstance.methods.getMoney().send({
    from: accounts_site[0],
    value:""+value.toFixed(0), //=>handle dot situation
    gas: gas,
  });
}

export default sentMoneyToContreact;
