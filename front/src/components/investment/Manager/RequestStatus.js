//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import Card from "../../UI/Card";
import classes from "./RequestStatus.module.css";
import { getRequstToManger } from "../../../hooks/API/api";
import {  useParams } from "react-router-dom";
import RequsetDetail from "./RequsetDetail";
import ToggleSwtich from "../../UI/ToggleSwitch";

const RequestStatus = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  let params = useParams();
  useEffect(() => {
    const runfunc = async () => {
      let listOfRequsets = await getRequstToManger(params.Id);
      setIsLoading(false);
      setData(listOfRequsets);
    };
    runfunc();
  }, [params.Id]);

  return (
    <div className={classes.portfolios}>
      {isLoading && <div>loading</div>}
      {data.map((Request) => (
        <div key={Request.id}>
          <div className={classes.container}>
            <RequsetDetail info={Request} />
           y <ToggleSwtich /> n<ToggleSwtich />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestStatus;
