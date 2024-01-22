import "./Costs.css";
import CostItem from "../CostItem/CostItem";
import Card from "../Card/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import React, {useState} from "react";

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
      {props.costs.map(cost => (<CostItem 
      date={cost.date}
      description={cost.description}
      amount={cost.amount} />
      ))}
    </Card>
    </div>
  );
}

export default Costs;
