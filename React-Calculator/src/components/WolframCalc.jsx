import React, { useEffect, useState } from 'react';
import WolfButtonGrid from './WolfButtonGrid';
import Screen from './Screen';
import './Calculator.css';

export const operations = {
    '+': (x, y) => parseFloat(x) + parseFloat(y),
    '-': (x, y) => parseFloat(x) - parseFloat(y),
    '*': (x, y) => parseFloat(x) * parseFloat(y),
    '/': (x, y) => parseFloat(x) / parseFloat(y),
    '%': (x, y) => parseFloat(y) * (parseFloat(x) / 100),
};
export const operators = Object.keys(operations);

const getApiData = async (number1, operator, accumulator) => {
    const response = await fetch(`/api/v2/query?appid=XA3Y4W-2EP6LQJ3W6&input=${number1}%20${operator}%20${accumulator}&output=json`);
    if (response.ok) {
        const data = await response.json();
        if (data.queryresult.success) {
            return data.queryresult.pods.find(({ id }) => id === 'Result')?.subpods[0]?.plaintext;
        }
    }
    throw new Error(`Error al calcular ${number1} ${operator} ${accumulator}`);
};

export function WolframCalc() {
    const [isOff, setIsOff] = useState(false);
    const [number1, setNumber1] = useState(null);
    const [operator, setOperator] = useState(null);
    const [accumulator, setAccumulator] = useState('');

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
                        getApiData(number1, operator, accumulator);
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
            <WolfButtonGrid
                handleOnClick={addData}
            />
        </div>
    );
}

export default WolframCalc;
