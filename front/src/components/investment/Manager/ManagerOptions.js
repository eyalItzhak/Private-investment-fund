//import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./ManagerOptions.module.css";
import NewRequset from "./NewRequest"
import RequestStatus from "./RequestStatus";
import StartWorkPriod from "./StartWorkPriod"

const ManagerOptions = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Card><NewRequset/></Card>
        <Card><StartWorkPriod/></Card>
      </div>
      <div className={classes.right}>
        <Card><RequestStatus isManager={props.isManager}/></Card>
      </div>
    </div>
  );
};

export default ManagerOptions;
