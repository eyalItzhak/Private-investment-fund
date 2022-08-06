
import classes from "./Repayment.module.css";


const ListOfInvestment = (props) => {

  return (props.data.map((invest) => (
        <div>
          <div> symbol  {invest.symobl} </div>
          <div> buy at price  {invest.purchase_rate} </div>
          <div> buy at price  {invest.currentRate} </div>
          <div> buy at price  {invest.quantity} </div>
        </div>
    
  )))
};

export default ListOfInvestment;
