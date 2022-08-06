import classes from "./ContractsList.module.css";
import { useState, useEffect } from "react";
import ContractItem from "./ContractsItems";
//import getAllContract from "../../../API/backend/getAllContract"


const PortfoliosList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const runfunc = async () => {
      let listOfInvestment = await props.getContracts();
      setIsLoading(false);
      setData(listOfInvestment);
    };
    runfunc();
  }, [props]);

  return (
    <div className={classes.portfolios}>
      {isLoading && <div>loading</div>}
      {data.map((portfolio) => (
        
        <div key={portfolio.contract}>
          {console.log(portfolio)}
          <ContractItem name={portfolio.contract} id={portfolio.contract} to={props.to} />
        </div>
      ))}
    </div>
  );
};

export default PortfoliosList;
