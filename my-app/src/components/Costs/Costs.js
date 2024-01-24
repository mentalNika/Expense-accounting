import "./Costs.css";
import Card from "../Card/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import React, { useState } from "react";
import CostsDiagram from "../CostsDiagram";
import CostList from "../CostList/CostList";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });
  
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
