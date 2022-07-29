import classes from "./InvestmentMenu.module.css";
import { NavLink,useParams } from "react-router-dom";



const InvestmentMenu = () => {
let params = useParams();

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to={`/Myinvestments/${params.Id}/Manger`} activeClassName={classes.active}>
            Manager
          </NavLink>
        </li>

        <li>
          <NavLink to={`/Myinvestments/${params.Id}/Stakeholder`} activeClassName={classes.active}>
           Stakeholder
          </NavLink>
        </li>

        <li>
          <NavLink to={`/Myinvestments/${params.Id}/Investor`} activeClassName={classes.active}>
            Investor
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default InvestmentMenu;
