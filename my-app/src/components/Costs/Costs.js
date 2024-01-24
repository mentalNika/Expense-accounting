import "./Costs.css";
import CostItem from "../CostItem/CostItem";
import Card from "../Card/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  let costsContent = <p>В этом году расходов нет</p>;

  if (filteredCosts.length > 0) {
    costsContent = filteredCosts.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ))
  }

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {costsContent}
      </Card>
    </div>
  );
};

export default Costs;
