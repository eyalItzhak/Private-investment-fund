//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import Card from "../../UI/Card";
import classes from "./RequestStatus.module.css";
import { getRequstToManger } from "../../../hooks/API/api";
import { useParams } from "react-router-dom";
import RequsetDetail from "./RequsetDetail";
import ToggleSwtich from "../../UI/ToggleSwitch";
import getReqests from "../../../API/ETH/getReqests";

const RequestStatus = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  let params = useParams();
  useEffect(() => {
    const runfunc = async () => {
     // let listOfRequsets = await getRequstToManger(params.Id);
      console.log("req=>" + params.Id);
      let req = await getReqests(params.Id);
      setIsLoading(false);
      setData(req);
    };
    runfunc();
  }, [params.Id]);

  return (
    <div className={classes.container}>
      {isLoading && <div>loading</div>}
      {data.map((Request,index) => (
        <div key={index}>
          <div className={classes.container}>
            <RequsetDetail info={Request} index={index} />
           <ToggleSwtich />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestStatus;
