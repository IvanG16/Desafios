import React, { useState } from 'react';
import CalculatorShell from '../CalculatorShell.jsx';
import '../Calculator.css';
import { operators, determinesOutput } from './utils/index.js';

export function WolframCalc({ setLogList }) {
    const [isOff, setIsOff] = useState(false);
    const [number1, setNumber1] = useState(null);
    const [operator, setOperator] = useState(null);
    const [accumulator, setAccumulator] = useState('');

    async function addData (input) {
        if(isOff && input !== 'Off'){
            return;
        }

        if (operators.includes(input) && !number1) {
                setNumber1(accumulator);
                setAccumulator('');
                setOperator(input);
                return;
        }

        determinesOutput({ input, setAccumulator, accumulator, setNumber1, number1, setOperator, operator, setIsOff, isOff ,setLogList })
    }

    return <CalculatorShell accumulator={accumulator} isOff={isOff} addData={addData} type={'wolfram'}/>;
}

export default WolframCalc;
