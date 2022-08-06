import React from "react";
import Card from "../components/UI/Card";
import classes from "./MyInvestments.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
import MyInvestmentMenu from "../components/UI/MyInvestmentMenu";
//import InvestmentList from "../components/investment/InvestmentList";
import ContractsList from "../components/ContractDetails/ContractsList"
import  userContract from "../API/backend/userContract"

//import useHttp from "../hooks/use-http"

const Myinvestments = (props) => {

  return (
    
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><ContractsList getContracts={userContract} to={"Myinvestments"}/></Card>
      </div>
      <div className={classes.right}>
        <Card> <div className={classes.high}><BaseOptionMenu/><hr className={classes.hr}/><MyInvestmentMenu/></div></Card>
      </div>
    </div>
  );
};

export default Myinvestments;
