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
        <Card><ManagerOptions isManager={true} /></Card>
      </div>

      <div className={classes.right}>
        <Card><div className={classes.high}><BaseOptionMenu/><hr className={classes.hr}/><InvestmentMenu/></div></Card>
      </div>
    </div>
  );
};

export default Manager;
