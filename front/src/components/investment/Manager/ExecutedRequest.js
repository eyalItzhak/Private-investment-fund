//import Card from "../../UI/Card";
import classes from "./ExecutedRequest.module.css";

const ExcutedRequest = (props) => {

  return (
    <button onClick={props.onClick} className={classes.button}>
      executed
    </button>
  );
};

export default ExcutedRequest;