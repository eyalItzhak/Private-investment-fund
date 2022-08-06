// //import Card from "../../UI/Card";
// import classes from "./Repayment.module.css";

// const Repayment = (props) => {

//   return (
//        <a href="/" className={classes.button}>Repayment</a>
//   );
// };

// export default Repayment;

//import Card from "../../UI/Card";
import classes from "./Repayment.module.css";
import repayment from "../../../API/ETH/repayment";
import { useParams } from "react-router-dom";

const Repayment = (props) => {
  let params = useParams();

  const handleClick = async () => {
    console.log("start");
    console.log(params.Id);
    await repayment(params.Id);
  };

  return (
    <button onClick={handleClick} className={classes.button}>
      Repayment
    </button>
  );
};

export default Repayment;
