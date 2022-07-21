import React from "react";
import Card from "../components/UI/Card";
import classes from "./MarketPage.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
import { useParams } from "react-router-dom";
import InvestmentDetails from "../components/investment/InvestmentDetails"
import MyInvestmentMenu from "../components/UI/MyInvestmentMenu"

const Investment = (props) => {
const params = useParams();

  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><InvestmentDetails/></Card>
      </div>

      <div className={classes.right}>
        <Card><BaseOptionMenu/><hr className={classes.hr}/><MyInvestmentMenu/></Card>
      </div>
    </div>
  );
};

export default Investment;
