import { Link } from "react-router-dom";
import Card from "../UI/Card";
//import classes from "./InvestmentItem.module.css";
import getContractName from "../../API/ETH/getContactName";
import { useState, useEffect } from "react";



const PortfoliosItem = (props) => {



    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState([]);
    useEffect(() => {
      const runfunc = async () => {
        let name = await getContractName(props.id);
        setIsLoading(false);
        setName(name);
      };
      runfunc();
    }, [props]);


  return (
    <Card>
      <Link className="btn" to={`/${props.to}/${props.id}`}>
        {isLoading&&<div>is loading</div>}
        {!isLoading&&<div>{name}</div>}
      </Link>
    </Card>
  );
};

export default PortfoliosItem;
