import React, { useEffect, useState } from 'react';
import ButtonGrid from './ButtonGrid';
import Screen from './Screen';
import './Calculator.css';

export function calculator() {
  const [isOff, setIsOff] = useState(false);
  const operators = ['+', '-', '*', '/', '%'];
  const operations = {
    '+': (x, y) => parseFloat(x) + parseFloat(y),
    '-': (x, y) => parseFloat(x) - parseFloat(y),
    '*': (x, y) => parseFloat(x) * parseFloat(y),
    '/': (x, y) => parseFloat(x) / parseFloat(y),
    '%': (x, y) => parseFloat(y) * (parseFloat(x) / 100),
  };
  const [number1, setNumber1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [accumulator, setAccumulator] = useState('');

  const getApiData = async () => {
    const response = await fetch(`https://api.wolframalpha.com/v2/query?appid=XA3Y4W-2EP6LQJ3W6&input=${number1}%2B${accumulator}`);
    console.log(response);
  };
  useEffect(() => {
    getApiData();
  }, []);

  function addData(input) {
    if (!isOff) {
      if (operators.includes(input)) {
        if (!number1) {
          setNumber1(accumulator);
          setAccumulator('');
          setOperator(input);
        }
      } else {
        switch (input) {
          case '=':
            if (number1 && accumulator && operator) {
              setAccumulator(operations[operator](number1, accumulator));
            }
            break;
          case 'C':
            setAccumulator('');
            setNumber1(null);
            setOperator(null);
            break;
          case 'del':
            if ((number1 && operator && accumulator) || accumulator) {
              setAccumulator(accumulator.substring(0, accumulator.length - 1));
            } else if (operator) {
              setOperator(operator.substring(0, operator.length - 1));
            } else if (number1) {
              setNumber1(number1.substring(0, number1.length - 1));
            }
            break;
          case 'Off':
            setIsOff(true);
            break;
          case '.':
            if (accumulator.includes('.')) {
              setAccumulator(accumulator);
            } else {
              setAccumulator(accumulator + input);
            }
            break;
          default:
            setAccumulator(accumulator + input);
        }
      }
    } else if (input === 'Off') {
      setAccumulator('');
      setNumber1(null);
      setOperator(null);
      setIsOff(false);
    }
  }

  return (
    <div className="w-[425px] h-[520px] bg-orange-500 rounded-[20px] flex-col justify-start items-start inline-flex">
      <Screen
        data={accumulator}
        power={isOff}
      />
      <ButtonGrid
        handleOnClick={addData}
      />
    </div>
  );
}

export default calculator;
