import Card from "../../UI/Card";
import ToggleSwtich from "../../UI/ToggleSwitch";
import Select from "react-select";
import classes from "./RequsetDetail.module.css";
import ExcutedRequest from "./ExecutedRequest";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import requestResponse from "../../../API/ETH/requestResponse"
import requestExecuted from "../../../API/ETH/requestExecuted";

const options = [
  { value: "yes", label: "yes" },
  { value: "no", label: "no" },
];

const RequsetDetail = (props) => {
  const [checked, setChecked] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  let params = useParams();


  const handleChangeStakeholder = async () => {
    if(userResponse==null){
      return;
    }
    setChecked(true);//was !checked
    let res= userResponse.value;
        if(res==="yes"){
          res=true;
        }else{
          res=false;
        }
    await requestResponse(params.Id,props.index,res);
    
  };

  const excecuted = async () => {
    await requestExecuted(params.Id,props.index,props.info.what,props.info.value);
  };

  // console.log(props.info)
  return (
    <div className={classes.row} id={props.index}>
      <Card>
        <div>id: {props.index}</div>
        <div>stack: {props.info.what}</div>
        <div>why: {props.info.description}</div>
        <div>ammunt: {props.info.value}</div>
        <div>stat: {props.info.complete + ""}</div>
        <div>pos: {props.info.approvalCount}</div>
        <div>neg: {props.info.neg}</div>
        {!props.isManager && <Select options={options}  onChange={setUserResponse} />}
        {!props.isManager && (
          <div className={classes.row}>
            {" "}
            <ToggleSwtich value={checked} onChange={handleChangeStakeholder} />
          </div>
        )}
        {props.isManager && <ExcutedRequest onClick={excecuted}/>}
      </Card>
    </div>
  );
};

export default RequsetDetail;
