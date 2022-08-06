import classes from "./MyInvestmentMenu.module.css";
import { NavLink,useParams } from "react-router-dom";
import isContractStart from "../../API/ETH/isContractStart";
import React, { useEffect, useState } from "react";

const PortfolioMenu = () => {
  let params = useParams();

  const [canJoin, setCanJoin] = useState(false);

  useEffect(() => {
    const runfunc = async () => {
    
      const selected = params.Id;
      const info = await isContractStart(selected); //GET IF CONTRACT CAN OR CANNOT BUY ..if can buy=>he cannot join....
      console.log(info);
      setCanJoin(!info);
    };
    runfunc();
  }, [params]);


  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          {canJoin&&<NavLink to={`/portfolios/${params.Id}/InvestmentForm`} activeClassName={classes.active}>
            make investment now !
          </NavLink>}
        </li>

      </ul>
    </nav>
  );
};

export default PortfolioMenu;
