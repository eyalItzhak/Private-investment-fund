//import React ,{useEffect} from "react";
import Card from "../components/UI/Card";
import classes from "./MarketPage.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
//import InvestmentDetails from "../components/investment/InvestmentDetails"
import InvestmentMenu from "../components/UI/InvestmentMenu"
 
import getContractInfo from "../API/ETH/getContractInfo";
import ContractsDetails from "../components/ContractDetails/ContractsDetails"

const Investment = (props) => {


  return (
    <div className={classes.row}>
      <div className={classes.left}>
      <Card><ContractsDetails ContractInfo={getContractInfo}/></Card>
      </div>

      <div className={classes.right}>
        <Card><BaseOptionMenu/><hr className={classes.hr}/><InvestmentMenu/><hr className={classes.hr}/></Card>
      </div>
    </div>
  );
};

export default Investment;
