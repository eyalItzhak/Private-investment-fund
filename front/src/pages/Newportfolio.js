//import React ,{useEffect} from "react";
import Card from "../components/UI/Card";
import classes from "./Portfolio.module.css";
import BaseOptionMenu from "../components/UI/BaseOptionMenu";
import { useState } from "react";
import  openNewPortFolios  from "../API/ETH/openNewPortFolios";
import addPortfolioSQL from "../API/backend/addPortfolioSQL"

const Newportfolio = (props) => {
  const [mini, setMini] = useState("");
  const [days, setDays] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("name "+name );
    let contactID=await openNewPortFolios(mini,days,name);
    addPortfolioSQL(contactID);
    console.log(`The name you entered was: ${contactID}`);
  };

  return (
    <div className={classes.row}>
      <div className={classes.left}>
        <Card>
          <form onSubmit={handleSubmit}>
            <label>
              Enter your value:
              <input
                type="number"
                value={mini}
                onChange={(e) => setMini(e.target.value)}
              />
            </label>
            <label>
              Enter your days:
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </label>

            <label>
              name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <input type="submit" />
          </form>
        </Card>
      </div>

      <div className={classes.right}>
        <Card>
          <BaseOptionMenu />
        </Card>
      </div>
    </div>
  );
};

export default Newportfolio;
