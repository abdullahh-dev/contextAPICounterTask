import { useState } from 'react';
import './App.css';
import ComponentA from './assets/components/ComponentA';
import ComponentB from './assets/components/ComponentB';

function App() {
  return (
    <>
      <div className="bg-[#434343] flex justify-evenly items-center rounded-md max-w-[1440px] m-auto p-4 mt-5 w-full">
        <p className="text-[24px]">Total</p>
        <button className="bg-blue-600">0</button>
      </div>
      <div className="flex flex-col gap-6 mt-24 items-center">
        <ComponentA />
        <ComponentB />
      </div>
    </>
  );
}

export default App;
