import classes from "./InvestorOptions.module.css";
import { getPesonalInfo } from "../../../hooks/API/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import Redraw from "./Redraw";

const InvestorOptions = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  let params = useParams();
  useEffect(() => {
    const runfunc = async () => {
      let info = await getPesonalInfo(params.Id);
      setIsLoading(false);
      setData(info);
    };
    runfunc();
  }, []);

  return (
    <div className={classes.container}>
      <div>
        {isLoading && <div>loading</div>}
        {!isLoading && (<Details info={data} />)}
        {!isLoading && (<Redraw info={data} />)}
      </div>
    </div>
  );
};

export default InvestorOptions;
