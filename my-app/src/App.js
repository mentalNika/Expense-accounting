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
  { id: 'c3', date: new Date(2022, 1, 12), description: "Кружка", amount: 10 },
  { id: 'c4', date: new Date(2023, 2, 7), description: "Сумка", amount: 200 },
  { id: 'c5', date: new Date(2023, 3, 7), description: "Машина", amount: 2000 },
  { id: 'c6', date: new Date(2022, 4, 7), description: "Компьютер", amount: 2000 },
  { id: 'c7', date: new Date(2021, 5, 7), description: "Стол", amount: 100 },
  { id: 'c8', date: new Date(2021, 2, 7), description: "Стул", amount: 50 },
  { id: 'c9', date: new Date(2022, 2, 7), description: "Рубашка", amount: 100 },
  { id: 'c10', date: new Date(2023, 5, 7), description: "Носки", amount: 10 },
  { id: 'c11', date: new Date(2023, 9, 7), description: "Платье", amount: 200 },
  { id: 'c12', date: new Date(2023, 10, 7), description: "Наушники", amount: 150 },
  { id: 'c13', date: new Date(2022, 11, 7), description: "Книга", amount: 30 },
  { id: 'c14', date: new Date(2022, 2, 7), description: "Вешалка", amount: 500 },
  { id: 'c15', date: new Date(2024, 4, 7), description: "Шкаф", amount: 1500 },
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
