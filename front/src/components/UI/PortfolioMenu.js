import classes from "./MyInvestmentMenu.module.css";
import { NavLink,useParams } from "react-router-dom";


const PortfolioMenu = () => {
  let params = useParams();
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to={`/portfolios/${params.id}/InvestmentForm`} activeClassName={classes.active}>
            make investment now !
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default PortfolioMenu;
