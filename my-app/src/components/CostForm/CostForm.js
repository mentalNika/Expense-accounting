import React, {useState} from "react";
import "./CostForm.css";

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    }

    props.onSaveCostData(costData);

    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <label>Название</label>
        <input type="text" value={inputName} onChange={nameChangeHandler} />
      </div>
      <div className="new-cost__controls">
        <label>Сумма</label>
        <input type="number" value={inputAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
      </div>
      <div className="new-cost__controls">
        <label>Дата</label>
        <input type="date" value={inputDate} onChange={dateChangeHandler} />
      </div>

      <div className="new-cost__actions">
        <button type="submit">Добавить расход</button>
        <button type="button" onClick={props.onCancel}>Отмена</button>
      </div>
    </form>
  );
};

export default CostForm;
