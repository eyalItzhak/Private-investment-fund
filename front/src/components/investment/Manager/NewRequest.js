import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import classes from "./NewRequest.module.css";

const NewRequset = (props) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" />
      </div>

      <div className={classes.control}>
        <label htmlFor="author">why</label>
        <input type="text" id="author" />
      </div>

      <div className={classes.control}>
        <label htmlFor="author">Amount</label>
        <input type="text" id="Amount of investment" />
      </div>

      <div className={classes.actions}>
        <button className="btn">Create Request</button>
      </div>
    </form>
  );
};

export default NewRequset;
