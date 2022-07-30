//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import Card from "../../UI/Card";
import classes from "./RequestStatus.module.css";
import { useParams } from "react-router-dom";
import RequsetDetail from "./RequsetDetail";
//import ToggleSwtich from "../../UI/ToggleSwitch";
import getReqests from "../../../API/ETH/getReqests";
//import ExcutedRequest from "./ExecutedRequest";

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
      {data.map((Request, index) => (
        <div className={classes.container} key={index}>
          <div>
          <RequsetDetail info={Request} index={index} isManager={props.isManager} />
           {/*props.isManager&&<ExcutedRequest/>*/}
           </div>
        </div>
      ))}
    </div>
  );
};

export default RequestStatus;
