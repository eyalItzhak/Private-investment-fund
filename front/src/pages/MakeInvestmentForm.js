//import React ,{useEffect} from "react";
import Card from "../components/UI/Card";
import classes from "./Manager.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
//import { useParams } from "react-router-dom";
import InvestmentForm from "../components/portfolios/InvestmentForm"

  

const MakeInvestmentForm = (props) => {


  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><InvestmentForm/></Card>
      </div>

      <div className={classes.right}>
        <Card><BaseOptionMenu/><hr className={classes.hr}/></Card>
      </div>
    </div>
  );
};

export default MakeInvestmentForm;
