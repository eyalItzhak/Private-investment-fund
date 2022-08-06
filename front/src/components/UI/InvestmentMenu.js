import classes from "./InvestmentMenu.module.css";
import { NavLink, useParams } from "react-router-dom";
import ToggleSwtich from "./ToggleSwitch";
import exPayDay from "../../API/ETH/exPayDay"
import React, { useState } from "react";

const InvestmentMenu = () => {
  let params = useParams();
  
  const [checked, setChecked] = useState(false);


  const payDay = async () => {
    await exPayDay(params.Id);
    setChecked(true);
  };

  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to={`/Myinvestments/${params.Id}/Manger`}
              activeClassName={classes.active}
            >
              Manager
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`/Myinvestments/${params.Id}/Stakeholder`}
              activeClassName={classes.active}
            >
              Shareholder {/*NEED TO FIX EVRERYWERE!!!!!!!!*/}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`/Myinvestments/${params.Id}/Investor`}
              activeClassName={classes.active}
            >
              Investor
            </NavLink>
          </li>

          <li>
            <NavLink to={`/Myinvestments/${params.Id}`}>Myinvestments</NavLink>
          </li>
        </ul>
        <hr className={classes.hr} />
      </nav>
      payday
      <div className={classes.row}>
       <ToggleSwtich value={checked} onChange={payDay}/>
      </div>
    </div>
  );
};

export default InvestmentMenu;
