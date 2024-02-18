import React, { useContext } from 'react';
import { CounterContext } from '../Contexts/CounterContext';
function ComponentC() {
  const { count1, setCount1 } = useContext(CounterContext);

  return (
    <div className="flex items-center gap-7">
      <button
        disabled={count1 == 0}
        onClick={() => {
          setCount1(count1 && count1 - 1);
        }}>
        -
      </button>
      <p>{count1}</p>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}>
        +
      </button>
    </div>
  );
}

export default ComponentC;
