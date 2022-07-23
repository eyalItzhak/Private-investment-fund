import "./Card.module.css";
import "./ToggleSwtich.scss";
const ToggleSwtich = (props) => {
  return (
    
      <label className="switch-wrap">
        <input type="checkbox" />
        <div className="switch"></div>
      </label>

  );
};

export default ToggleSwtich;
