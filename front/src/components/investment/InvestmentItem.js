import { Link } from "react-router-dom";
import Card from "../UI/Card";
//import classes from "./InvestmentItem.module.css";

const InvestmentItem = (props) => {
  return (
    <Card>
      <Link className="btn" to={`/Myinvestments/${props.id}`}>
        {props.name}
      </Link>
    </Card>
  );
};

export default InvestmentItem;
