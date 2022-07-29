import classes from "./PortfoliosList.module.css";
//import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
//import { getListOfProtfolio } from "../../hooks/API/api";
import PortfoliosItem from "./PortfoliosItem";
import getAllContract from "../../API/backend/getAllContract"

const PortfoliosList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const runfunc = async () => {
      let listOfInvestment = await getAllContract();
      console.log(await getAllContract());
      setIsLoading(false);
      setData(listOfInvestment);
    };
    runfunc();
  }, []);

  return (
    <div className={classes.portfolios}>
      {isLoading && <div>loading</div>}
      {data.map((portfolio,index) => (
        <div key={portfolio.contract}>
          <PortfoliosItem name={portfolio.contract} id={portfolio.contract} />
        </div>
      ))}
    </div>
  );
};

export default PortfoliosList;
