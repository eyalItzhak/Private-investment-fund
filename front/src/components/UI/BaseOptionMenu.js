import classes from "./BaseOptionMenu.module.css";
import { NavLink } from "react-router-dom";

const BaseOptionMenu = () => {
  return (
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
          <NavLink to="/currentmarket" activeClassName={classes.active}>
            current market
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BaseOptionMenu;