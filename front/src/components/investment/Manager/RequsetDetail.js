import Card from "../../UI/Card";


const RequsetDetail = (props) => {
  // console.log(props.info)
  return (
    <div className="container" id={props.id}>
      <Card>
        <div>id: {props.info.id}</div>
        <div>stack: {props.info.stack}</div>
        <div>why: {props.info.why}</div>
        <div>ammunt: {props.info.ammunt}</div>
        <div>stat: {props.info.stat}</div>
        <div>pos: {props.info.pos}</div>
        <div>neg: {props.info.neg}</div>
      </Card>
    </div>
  );
};

export default RequsetDetail;
