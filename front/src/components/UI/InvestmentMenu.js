import classes from "./InvestmentMenu.module.css";
import { NavLink } from "react-router-dom";

const InvestmentMenu = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/ASD" activeClassName={classes.active}>
            Manager
          </NavLink>
        </li>

        <li>
          <NavLink to="/ASD" activeClassName={classes.active}>
           Stakeholder
          </NavLink>
        </li>

        <li>
          <NavLink to="/ASD" activeClassName={classes.active}>
            Investor
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default InvestmentMenu;
