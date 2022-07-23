//import React ,{useEffect} from "react";
import Card from "../components/UI/Card";
import classes from "./Stakeholder.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
//import { useParams } from "react-router-dom";
import StakeholderOptions from "../components/investment/Stakeholder/StakeholderOptions"
import InvestmentMenu from "../components/UI/InvestmentMenu"
import Repayment from "../components/investment/Stakeholder/Repayment";
  

const Manager = (props) => {


  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><StakeholderOptions/></Card>
      </div>

      <div className={classes.right}>
        <Card><BaseOptionMenu/><hr className={classes.hr}/><InvestmentMenu/><hr className={classes.hr}/><Repayment/></Card>
      </div>
    </div>
  );
};

export default Manager;
