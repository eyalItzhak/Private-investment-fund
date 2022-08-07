
import Card from "../UI/Card"

const ListOfInvestment = (props) => {

  return (props.data.map((invest,index) => (
        <Card  key={index} >
          <div> symbol  {invest.symbol} </div>
          <div> buy at price  {invest.purchase_rate} </div>
          <div> current price  {invest.currentRate} </div>
          <div> quantity  {invest.quantity} </div>
        </Card>
    
  )))
};

export default ListOfInvestment;
