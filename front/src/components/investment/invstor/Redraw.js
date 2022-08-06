//import Card from "../../UI/Card";
import classes from "./Redraw.module.css";
import {  useParams } from "react-router-dom";
import redraw from  "../../../API/ETH/redrawFromContract"

const StartWorkPriod = (props) => {

  let params = useParams();

  const handleClick = async() => {
    console.log("start")
    console.log(params.Id)
    redraw(params.Id);
 
  };

  return (
    <button onClick={handleClick} className={classes.button}>
      leave contract
    </button>
  );
};

export default StartWorkPriod;
