import React, { useEffect, useState } from 'react';
import ButtonGrid from '../ButtonGrid';
import Screen from '../Screen';
import '../Calculator.css';
import { basicOperators, determinesOutputBasic } from './utils/index.js';

export function Calculator() {
  const [isOff, setIsOff] = useState(false);
  const [number1, setNumber1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [accumulator, setAccumulator] = useState('');

  function addData(input) {
    if(isOff && input !== 'Off'){
      return;
    }

    if (basicOperators.includes(input) && !number1) {
            setNumber1(accumulator);
            setAccumulator('');
            setOperator(input);
            return;
    }

    determinesOutputBasic({ input, setAccumulator, accumulator, setNumber1, number1, setOperator, operator, setIsOff, isOff })
  }

  return (
    <div className="w-[425px] h-[520px] bg-orange-500 rounded-[20px] flex-col justify-start items-start inline-flex">
      <Screen
        data={accumulator}
        isOff={isOff}
      />
      <ButtonGrid
        handleOnClick={addData}
      />
    </div>
  );
}

export default Calculator;
