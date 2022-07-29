// import { Link } from "react-router-dom";
// import Card from "../../UI/Card";
import classes from "./InvestmentForm.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import newInvestor from "../../API/ETH/newInvestor";

const InvestmentForm = (props) => {
  let params = useParams();
  const [investment, setInvestment] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const selected = params.Id
    //console.log(selected);
    newInvestor(investment,selected);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="author">Amount</label>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
        />
      </div>

      <div className={classes.actions}>
        <button className="btn">Become Investor!</button>
      </div>
    </form>
  );
};

export default InvestmentForm;
