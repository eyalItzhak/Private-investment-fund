import { Link } from "react-router-dom";
import Card from "../UI/Card";
//import classes from "./InvestmentItem.module.css";

const PortfoliosItem = (props) => {
  return (
    <Card>
      <Link className="btn" to={`/portfolios/${props.id}`}>
        {props.name}
      </Link>
    </Card>
  );
};

export default PortfoliosItem;
