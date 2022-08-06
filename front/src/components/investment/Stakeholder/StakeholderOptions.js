
import classes from "./StakeholderOptions.module.css";
import RequestStatus from "../Manager/RequestStatus"

const ManagerOptions = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.right}>
        <RequestStatus/>
      </div>
    </div>
  );
};

export default ManagerOptions;
