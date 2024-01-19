import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    { date: new Date(2021, 2, 12), description: "Холодильник", amount: 999.99 },
    {
      date: new Date(2021, 11, 23),
      description: "Микроволновка",
      amount: 234.24,
    },
    { date: new Date(2021, 6, 7), description: "Машина", amount: 9223.99 },
  ];
  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
