import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#434343] flex justify-evenly items-center rounded-md max-w-[1440px] m-auto p-4 mt-5 w-full">
        <p className="text-[24px]">Total</p>
        <button disabled={true}>1</button>
      </div>
      <></>
    </>
  );
}

export default App;
