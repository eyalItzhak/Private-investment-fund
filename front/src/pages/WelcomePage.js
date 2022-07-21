import React from "react";
import Card from "../components/UI/Card";
import classes from "./WelcomePage.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu"

const WelcomePage = (props) => {
  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card><p>some word about us asdasd</p></Card>
      </div>

      <div className={classes.right}>
        <Card><BaseOptionMenu/></Card>
      </div>
    </div>
  );
};

export default WelcomePage;
