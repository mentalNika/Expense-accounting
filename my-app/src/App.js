import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    { id: 'c1', date: new Date(2021, 2, 12), description: "Холодильник", amount: 999.99 },
    {
      id: 'c2', date: new Date(2021, 11, 23),
      description: "Микроволновка",
      amount: 234.24,
    },
    { id: 'c3', date: new Date(2021, 6, 7), description: "Машина", amount: 9223.99 },
  ];

const addCostHandler = (cost) => {
  console.log(cost);
  console.log('App');
  // costs.push(cost);
  // console.log(costs);
}

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
