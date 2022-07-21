//import React ,{useEffect} from "react";
import Card from "../components/UI/Card";
import classes from "./MarketPage.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
import { useParams } from "react-router-dom";
import InvestmentDetails from "../components/investment/InvestmentDetails"
import InvestmentMenu from "../components/UI/InvestmentMenu"
  

const Investment = (props) => {


  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><InvestmentDetails/></Card>
      </div>

      <div className={classes.right}>
        <Card><BaseOptionMenu/><hr className={classes.hr}/><InvestmentMenu/></Card>
      </div>
    </div>
  );
};

export default Investment;