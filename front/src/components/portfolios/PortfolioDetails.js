import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./PortfolioDetails.module.css";
import getContractInfo from "../../API/ETH/getContractInfo";
//import GetAllContract from "../../API/backend/getAllContract";
const InvestmentDetails = (props) => {
  let params = useParams();
  const [data, setData] = useState(false);

  useEffect(() => {
    const runfunc = async () => {
     // const data = await GetAllContract();
      const selected = params.Id;
      console.log("id:=>"+selected);
      const info = await getContractInfo(selected);
      console.log(info);
      setData(info);
    };
    runfunc();
  }, [params.Id]);

  let renderData = (
    <div className={classes.container}>
      <div className={classes.left}>
        <Card>contract address {data.address}</Card>
        <Card>manager address {data.manager}</Card>
        <Card>investors {data.numInvestor}</Card>
        <Card>steakholder {data.listOfStakeholders}</Card>{" "}
        {/*need to fix=> need to implemt not like that...*/}
      </div>
      <div className={classes.center}>
        <div>
          <Card>yeld ~~~ </Card>
          <Card>time created {data.timeCreate}</Card>
          <Card>time to join {data.timeToJoin}</Card>
          <Card>time to end {data.timeEnd}</Card>
        </div>
      </div>
      <div className={classes.right}>
        <div>
          <Card>total investment ~~~</Card>
          <Card>share ~~~ </Card>
          <Card>resrve ~~~ </Card>
          <Card>contrbution cash ~~~ </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {data && renderData}
      {!data && <div>loading</div>}
    </div>
  );
};
export default InvestmentDetails;
