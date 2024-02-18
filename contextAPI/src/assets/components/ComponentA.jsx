import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../Contexts/CounterContext';

function ComponentA() {
  const counterState = useContext(CounterContext);
  const increment = () => {
    counterState.setCount(counterState.count + 1);
  };
  const decrement = () => {
    counterState.count && counterState.setCount(counterState.count - 1);
    console.log(counterState.count);
  };
  return (
    <div className="flex items-center gap-7">
      <button onClick={decrement}>-</button>
      <p>{counterState.count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default ComponentA;
