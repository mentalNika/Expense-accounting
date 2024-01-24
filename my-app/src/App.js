import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import React, {useState} from "react";

const INITIAL_COSTS = [
  { id: 'c1', date: new Date(2023, 2, 12), description: "Холодильник", amount: 999.99 },
  {
    id: 'c2', date: new Date(2021, 11, 23),
    description: "Микроволновка",
    amount: 234.24,
  },
  { id: 'c3', date: new Date(2021, 6, 7), description: "Машина", amount: 9223.99 },
];

const App = () => {
  
  const [costs, setCosts] = useState(INITIAL_COSTS);

const addCostHandler = (cost) => {
  setCosts(prevCosts => {
    return [cost, ...prevCosts]
  });
}

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
