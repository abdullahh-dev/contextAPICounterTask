import { createContext } from 'react';
import { useState } from 'react';
export const CounterContext = createContext(null);
export const ContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount, count1, setCount1 }}>
      {props.children}
    </CounterContext.Provider>
  );
};
