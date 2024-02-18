import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../Contexts/CounterContext';

function ComponentA() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className="flex items-center gap-7">
      <button
        disabled={count == 0}
        onClick={() => {
          setCount(count && count - 1);
        }}>
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        +
      </button>
    </div>
  );
}

export default ComponentA;
