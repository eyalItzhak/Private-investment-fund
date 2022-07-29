import classes from "./MyInvestmentMenu.module.css";
import { NavLink } from "react-router-dom";

const InvestmentMenu = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/newportfolio" activeClassName={classes.active}>
            create new portfolio
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default InvestmentMenu;
