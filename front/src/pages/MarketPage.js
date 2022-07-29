import React from "react";
import Card from "../components/UI/Card";
import classes from "./MyInvestments.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
import MyInvestmentMenu from "../components/UI/MyInvestmentMenu";
//import InvestmentList from "../components/investment/InvestmentList";

//import useHttp from "../hooks/use-http"

const Myinvestments = (props) => {

  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card></Card>
      </div>
      <div className={classes.right}>
        <Card><BaseOptionMenu/><hr className={classes.hr}/><MyInvestmentMenu/></Card>
      </div>
    </div>
  );
};

export default Myinvestments;
