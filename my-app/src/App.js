import CostItem from "./components/CostItem/CostItem";

function App() {
  const costs = [
    { date: new Date(2021, 2, 12), 
      description: "Холодильник", 
      amount: 999.99
    },
    { date: new Date(2021, 11, 23), 
      description: "Микроволновка", 
      amount: 234.24
    },
    { date: new Date(2021, 6, 7), 
      description: "Машина", 
      amount: 9223.99
    },
  ];
  return (
    <div>
      <h1>React</h1>
      <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} 
      />
      <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} 
      />
      <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} 
      />
    </div>
  );
}

export default App;
