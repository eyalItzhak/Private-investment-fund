//import React ,{useEffect} from "react";
import Card from "../components/UI/Card";
import classes from "./Manager.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"
//import { useParams } from "react-router-dom";
import ManagerOptions from "../components/investment/Manager/ManagerOptions"
import InvestmentMenu from "../components/UI/InvestmentMenu"
  

const Manager = (props) => {


  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><ManagerOptions/></Card>
      </div>

      <div className={classes.right}>
        <Card><BaseOptionMenu/><hr className={classes.hr}/><InvestmentMenu/></Card>
      </div>
    </div>
  );
};

export default Manager;
