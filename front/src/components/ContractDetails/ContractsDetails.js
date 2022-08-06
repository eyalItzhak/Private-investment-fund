import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./ContractsDetails.module.css";

//import GetAllContract from "../../API/backend/getAllContract";
const InvestmentDetails = (props) => {
  let params = useParams();
  const [data, setData] = useState(false);

  useEffect(() => {
    const runfunc = async () => {
      // const data = await GetAllContract();
      const selected = params.Id;
      console.log("id:=>" + selected);
      const info = await props.ContractInfo(selected);
      console.log(info);
      setData(info);
    };
    runfunc();
  }, [params, props]);


  let renderData = (renderfunc) => (
    <div className={classes.container}>
      <div className={classes.left}>
        <Card>contract address {data.address}</Card>
        <Card>manager address {data.manager}</Card>
        <Card>investors {data.numInvestor}</Card>
        {/* <Card>steakholder {data.listOfStakeholders}</Card>{" "} */}
        <Card>
          {console.log(data)}
          {console.log(data.listOfStakeholders)}
          {data.listOfStakeholders.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </Card>
        {/*need to fix=> need to implemt not like that...*/}
      </div>
      <div className={classes.center}>
        <div>
          <Card>repaymentVote  {data.vote} </Card>
          <Card>time created {data.timeCreate}</Card>
          <Card>time to join {data.timeToJoin}</Card>
          <Card>time to end {data.timeEnd}</Card>
        </div>
      </div>
      <div className={classes.right}>
        <div>
          <Card>total investment ~~~</Card>
          <Card>share ~~~ </Card>
          <Card>resrve {data.reserve} </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {data && renderData()}
      {!data && <div>loading</div>}
    </div>
  );
};
export default InvestmentDetails;
