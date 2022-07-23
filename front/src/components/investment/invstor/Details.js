import Card from "../../UI/Card";


const Details = (props) => {
  // console.log(props.info)
  return (
    <div className="container" id={props.id}>
      <Card>
        <div>init case : {props.info.init_case}</div>
        <div>current case : {props.info.current_case}</div>
        <div>join date : {props.info.join_date}</div>
        <div>rank : {props.info.rank}</div>
      </Card>
    </div>
  );
};

export default Details;
