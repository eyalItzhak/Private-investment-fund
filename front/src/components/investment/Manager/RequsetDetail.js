import Card from "../../UI/Card";
import ToggleSwtich from "../../UI/ToggleSwitch";
import Select from 'react-select'
import classes from "./RequsetDetail.module.css";

const options = [
  { value: 'yes', label: 'yes' },
  { value: 'no', label: 'no' }
]


const RequsetDetail = (props) => {
  // console.log(props.info)
  return (
    <div className="container" id={props.index}>
      <Card>
        <div>id: {props.index}</div>
        <div>stack: {props.info.what}</div>
        <div>why: {props.info.description}</div>
        <div>ammunt: {props.info.value}</div>
        <div>stat: {props.info.complete+""}</div>
        <div>pos: {props.info.approvalCount}</div>
        <div>neg: {props.info.neg}</div>
        <Select options={options} />
        <div className={classes.row}> <ToggleSwtich/></div>
       
      </Card>
    </div>
  );
};

export default RequsetDetail;
