import classes from "./InvestmentList.module.css";
//import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getListOfProtfolio } from "../../hooks/API/api";
import InvestmentItem from "./InvestmentItem";

const InvestmentList = () => {
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
          <InvestmentItem name={portfolio[1]} id={portfolio[0]} />
        </div>
      ))}
    </div>
  );
};

export default InvestmentList;
