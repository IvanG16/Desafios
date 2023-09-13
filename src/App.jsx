import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';
import { CalcButton } from './components/button';

function App() {
  const [number1, setNumber1] = useState(0);
  useEffect(()=>console.log(number1),[number1])
  return (
    <>  
      <main>
        <div className="numPad grid grid-cols-4 gap-4 absolute bottom-0 right-0 left-0 p-20 rounded-md">
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
      </main>
    </>
  );
}

export default App;
