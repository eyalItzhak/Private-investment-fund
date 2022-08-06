import classes from "./InvestmentMenu.module.css";
import { NavLink, useParams } from "react-router-dom";

const InvestmentMenu = () => {
  let params = useParams();

  return (
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
      <hr className={classes.hr}/>
      <ul>
      <li>
          <NavLink to={`/Myinvestments/${params.Id}`}>Myinvestments</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default InvestmentMenu;
