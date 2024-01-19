import './CostItem.css';
import CostDate from '../CostDate/CostDate';
import Card from '../Card/Card';
import React, { useState } from 'react';

const CostItem = (props) => {

  // хук useState (состояние)
  const [description, setDescription] = useState(props.description);

  const changeDescriptionHandler = () => {
    setDescription('New');
  }

  return (
    <Card className='cost-item'>
      <CostDate date={props.date} />
      <div className='cost-item__description'> 
        <h2>{description}</h2>
        <div className='cost-item__price'>${props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Изменить описание</button>
    </Card>
  );
}

export default CostItem;