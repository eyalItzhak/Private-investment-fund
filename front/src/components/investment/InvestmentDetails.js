import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./InvestmentDetails.module.css";
import { getProtfolioInfo } from "../../hooks/API/api";

const InvestmentDetails = (props) => {
  let params = useParams();
  const [data, setData] = useState(false);

  useEffect(() => {
    const runfunc = async () => {
      const selected = parseInt(params.Id);
      const temp = await getProtfolioInfo(selected);
      setData(temp);
      console.log(temp);
    };
    runfunc();
  }, [params.Id]);

  let renderData = (
    <div className={classes.container}>
      <div className={classes.left}>
        <Card>contract address {data.contract}</Card>
        <Card>manager address {data.manager}</Card>
        <Card>investors {data.numOfInvestor}</Card>
        <Card>steakholder {data.stackHolderList}</Card> {/*need to fix=> need to implemt not like that...*/}
      </div>
      <div className={classes.center}>
        <div >
          <Card>yeld {data.yield} </Card>
          <Card>time created {data.init_time}</Card>
          <Card>time to end {data.end_time}</Card>
        </div>
      </div>
      <div className={classes.right}>
        <div>
          <Card>total investment {data.case_stock+data.case_resrve}</Card>
          <Card>share {data.case_stock}</Card>
          <Card>resrve {data.case_resrve}</Card>
          <Card>contrbution cash {data.startCase}</Card>
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
