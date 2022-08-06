//import React ,{useEffect} from "react";
import Card from "../components/UI/Card";
import classes from "./Manager.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
//import { useParams } from "react-router-dom";
import InvestorOptions from "../components/investment/invstor/InvestorOptions"
import InvestmentMenu from "../components/UI/InvestmentMenu"

const investorPage = (props) => {


  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><div className={classes.high}><InvestorOptions/></div></Card>
      </div>

      <div className={classes.right}>
        <Card><div className={classes.high}><BaseOptionMenu/><hr className={classes.hr}/><InvestmentMenu/></div></Card>
      </div>
    </div>
  );
};

export default investorPage;
