import React, { useEffect, useState } from 'react';
import ButtonGrid from './components/ButtonGrid';
import Screen from './components/Screen';
import './App.css';

function App() {
  const [value, setNumber1] = useState(0);
  useEffect(() => {
    console.log(value), [value]
  });
  return (

    <div className="w-[425px] h-[520px] bg-orange-500 rounded-[20px] flex-col justify-start items-start inline-flex inconsolata">
      <Screen value={value} />
      <ButtonGrid setNumber1={setNumber1} />
    </div>
  );
}

export default App;
