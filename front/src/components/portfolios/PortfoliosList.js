import classes from "./PortfoliosList.module.css";
//import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListOfProtfolio } from "../../hooks/API/api";
import PortfoliosItem from "./PortfoliosItem";

const PortfoliosList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const runfunc = async () => {
      let listOfInvestment = await getListOfProtfolio();
      setIsLoading(false);
      setData(listOfInvestment);
    };
    runfunc();
  }, []);

  return (
    <div className={classes.portfolios}>
      {isLoading && <div>loading</div>}
      {data.map((portfolio) => (
        <div key={portfolio[0]}>
          <PortfoliosItem name={portfolio[1]} id={portfolio[0]} />
        </div>
      ))}
    </div>
  );
};

export default PortfoliosList;
