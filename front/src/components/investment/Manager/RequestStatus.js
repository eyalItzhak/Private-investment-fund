import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../UI/Card";
import classes from "./RequestStatus.module.css";
import {getRequstToManger} from "../../../hooks/API/api"

import RequsetDetail from "./RequsetDetail";


const RequestStatus = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      const runfunc = async () => {
        let listOfRequsets = await getRequstToManger();
        setIsLoading(false);
        setData(listOfRequsets);
      };
      runfunc();
    }, []);
  


    return (
      <div className={classes.portfolios}>
        {isLoading && <div>loading</div>}
        {data.map((Request) => (
          //console.log(Request.id)
           <div key={Request.id}>
            
            <RequsetDetail info={Request}  />
           </div>
        ))}
      </div>
    );
};

export default RequestStatus;
