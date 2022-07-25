import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Investment Fund</div>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/welcomePage" activeClassName={classes.active}>
            welcomePage
            </NavLink>
          </li>
          <li>
            <NavLink to="/Myinvestments" activeClassName={classes.active}>
              My investments
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios" activeClassName={classes.active}>
              All portfolios
            </NavLink>
          </li>
          <li>
            <NavLink to="/currentmarket" activeClassName={classes.active}>
              current market
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
