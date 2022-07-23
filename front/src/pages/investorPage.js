//import React ,{useEffect} from "react";
import Card from "../components/UI/Card";
import classes from "./Manager.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
//import { useParams } from "react-router-dom";
import InvestorOptions from "../components/investment/invstor/InvestorOptions"
import InvestmentMenu from "../components/UI/InvestmentMenu"
  import { useState, useEffect } from "react";

const investorPage = (props) => {


  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><InvestorOptions/></Card>
      </div>

      <div className={classes.right}>
        <Card><BaseOptionMenu/><hr className={classes.hr}/><InvestmentMenu/></Card>
      </div>
    </div>
  );
};

export default investorPage;
