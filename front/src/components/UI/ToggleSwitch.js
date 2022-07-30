import "./Card.module.css";
import "./ToggleSwtich.scss";
const ToggleSwtich = (props) => {


  const Checkbox = ({value, onChange }) => {
    return (
        <label className="switch-wrap">
         <input type="checkbox" checked={value} onChange={onChange} />
        <div className="switch"></div>
      </label>
    );
  };
  
  return ( 
    <Checkbox value={props.value} onChange={props.onChange}/>
  );
};

export default ToggleSwtich;
