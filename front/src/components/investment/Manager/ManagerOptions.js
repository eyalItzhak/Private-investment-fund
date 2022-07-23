//import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./ManagerOptions.module.css";
import NewRequset from "./NewRequest"
import RequestStatus from "./RequestStatus";

const ManagerOptions = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Card><NewRequset/></Card>
      </div>
      <div className={classes.right}>
        <Card><RequestStatus/></Card>
      </div>
    </div>
  );
};

export default ManagerOptions;
