import Card from "../../UI/Card";
import { useState, useEffect } from "react";
import getInvestorDetail from "../../../API/ETH/getInvestorDetail";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  let params = useParams();

  useEffect(() => {
    const runfunc = async () => {
      setData(await getInvestorDetail(params.Id));

      setIsLoading(false);
    };
    runfunc();
  }, [props,params]);

  return (
    <div className="container" id={props.id}>
      {isLoading && <div>loading</div>}
      {console.log(data)}
      {!isLoading && (
        <Card>
          <div>investment : {data.invest}</div>
          <div>share : {data.share}</div>
          ___rank___
          {data.rank.map((item) => (
            <div  key={item}>{item}</div>
          ))}
        </Card>
      )}
    </div>
  );
};

export default Details;
