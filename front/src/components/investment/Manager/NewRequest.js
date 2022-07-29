// import { Link } from "react-router-dom";
// import Card from "../../UI/Card";
import classes from "./NewRequest.module.css";
import makeNewRequest from "../../../API/ETH/makeNewRequest";
import { useState } from "react";

import { useParams } from "react-router-dom";

const NewRequset = (props) => {
  const [stock, setStock] = useState("");
  const [ammaunt, setAmmaunt] = useState("");
  const [why, setWhy] = useState("");
  let params = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(params.Id);
    makeNewRequest(stock, why, ammaunt, params.Id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label>
          what to buy:
          <input
            type="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </label>

        <label>
          how mautch?:
          <input
            type="ammaunt"
            value={ammaunt}
            onChange={(e) => setAmmaunt(e.target.value)}
          />
        </label>

        <label>
          why?:
          <input
            type="stock"
            value={why}
            onChange={(e) => setWhy(e.target.value)}
          />
        </label>
      </div>

      <div className={classes.actions}>
        <button className="btn">Create Request</button>
      </div>
    </form>
  );
};

export default NewRequset;
