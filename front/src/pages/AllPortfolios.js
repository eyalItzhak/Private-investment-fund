import React from "react";
import Card from "../components/UI/Card";
import classes from "./AllPortfolios.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
//import PortfoliosList from "../components/portfolios/PortfoliosList";

import ContractsList from "../components/ContractDetails/ContractsList"
import getAllContract from "../API/backend/getAllContract"

//import useHttp from "../hooks/use-http"

const Myinvestments = (props) => {

  return (
    
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><ContractsList getContracts={getAllContract} to={"portfolios"}/></Card>
      </div>
      <div className={classes.right}>
        <Card><BaseOptionMenu/><hr className={classes.hr}/></Card>
      </div>
    </div>
  );
};

export default Myinvestments;
