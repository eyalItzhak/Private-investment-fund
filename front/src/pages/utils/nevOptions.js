import { NavLink } from "react-router-dom";
import classes from "./nevOptions.module.css";

const signIn = () => {
  return (
    <ul>
      <li>
        <NavLink to="/signIn" activeClassName={classes.active}>
         sign In
        </NavLink>
      </li>
      <li>
        <NavLink to="/Register" activeClassName={classes.active}>
        Register
        </NavLink>
      </li>
    </ul>
  );
};


const mainNev = () => {
    return (
      <ul>
        <li>
            asd1
        </li>
      </ul>
    );
  };
  
export {mainNev,signIn};
export default signIn;

