//import Card from "../../UI/Card";
import classes from "./StartWorkPriod.module.css";
import workPriod from "../../../API/ETH/workPriod";
import {  useParams } from "react-router-dom";

const StartWorkPriod = (props) => {

  let params = useParams();

  const handleClick = async() => {
    console.log("start")
    console.log(params.Id)
    await workPriod(params.Id);
  };

  return (
    <button onClick={handleClick} className={classes.button}>
      workPriod
    </button>
  );
};

export default StartWorkPriod;
