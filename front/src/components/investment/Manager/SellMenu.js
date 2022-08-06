import classes from "./SellMenu.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import sellSharesSQL from "../../../API/backend/sellSharesSQL"

const SellMenu = (props) => {
  const [stock, setStock] = useState("");
  const [ammaunt, setAmmaunt] = useState("");

  let params = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(params.Id);
    sellSharesSQL(stock, ammaunt, params.Id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label>
          what to sell:
          <input
            type="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </label>

        <label>
          how mautch(unit):
          <input
            type="ammaunt"
            value={ammaunt}
            onChange={(e) => setAmmaunt(e.target.value)}
          />
        </label>
      </div>

      <div className={classes.actions}>
        <button className="btn">make a sell</button>
      </div>
    </form>
  );
};

export default SellMenu;
