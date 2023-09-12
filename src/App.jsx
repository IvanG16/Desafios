import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';
import { CalcButton } from './components/button';

function App() {
  const [count1, setCount1] = useState(0);
  const [number1, setNumber1] = useState(0); 
  const pressed = (number) => () => console.log(`you pressed ${number}`)
  useEffect(()=>console.log(number1),[number1])
  return (
    <>
      <div className="numPad">
        <CalcButton number={1} buttonText={'Click me'} buttonClick={setNumber1}></CalcButton>
        <CalcButton number={2} buttonText={'Click me'} buttonClick={setNumber1}></CalcButton>
        <CalcButton number={3} buttonText={'Click me'} buttonClick={setNumber1}></CalcButton>
        <CalcButton number={4} buttonText={'Click me'} buttonClick={setNumber1}></CalcButton>
        <CalcButton number={5} buttonText={'Click me'} buttonClick={setNumber1}></CalcButton>
        <CalcButton number={6} buttonText={'Click me'} buttonClick={setNumber1}></CalcButton>
        <CalcButton number={7} buttonText={'Click me'} buttonClick={setNumber1}></CalcButton>
        <CalcButton number={8} buttonText={'Click me'} buttonClick={setNumber1}></CalcButton>
        <CalcButton number={9} buttonText={'Click me'} buttonClick={setNumber1}></CalcButton>
      </div>
    </>
  );
}

export default App;
