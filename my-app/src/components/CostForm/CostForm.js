import React, {useState} from "react";
import "./CostForm.css";

const CostForm = () => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  }


  return (
    <form>
      <div className="new-cost__controls">
        <label>Название</label>
        <input type="text" onChange={nameChangeHandler} />
      </div>
      <div className="new-cost__controls">
        <label>Сумма</label>
        <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" />
      </div>
      <div className="new-cost__controls">
        <label>Дата</label>
        <input type="date" onChange={dateChangeHandler} />
      </div>

      <div className="new-cost__actions">
        <button type="submit">Добавить расход</button>
      </div>
    </form>
  );
};

export default CostForm;
