import { Link } from "react-router-dom";
import Card from "../../UI/Card"
import classes from "./RequsetDetail.module.css";

const RequsetDetail = (props) => {
 // console.log(props.info)
  return (
    
    <Card>
      {console.log(props.info)}
        <div>id: {props.info.id}</div>
        <div>stack: {props.info.stack}</div>
        <div>why: {props.info.why}</div>
        <div>ammunt: {props.info.ammunt}</div>
        <div>stat: {props.info.stat}</div>
    </Card>
  );
};

export default RequsetDetail;
