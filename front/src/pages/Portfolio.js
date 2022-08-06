//import React ,{useEffect} from "react";
import Card from "../components/UI/Card";
import classes from "./Portfolio.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"

//import PortfolioDetails from "../components/portfolios/PortfolioDetails"
import PortfolioMenu from "../components/UI/PortfolioMenu"

import getContractInfo from "../API/ETH/getContractInfo";
import ContractsDetails from "../components/ContractDetails/ContractsDetails"
  

const Portfolio = (props) => {


  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><div className={classes.high} ><ContractsDetails ContractInfo={getContractInfo}/></div></Card>
      </div>

      <div className={classes.right}>
        <Card><div className={classes.high} ><BaseOptionMenu/><hr className={classes.hr}/><PortfolioMenu/></div></Card>
      </div>
    </div>
  );
};

export default Portfolio;
