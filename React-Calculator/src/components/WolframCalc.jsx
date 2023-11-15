import React, { useState } from 'react';
import WolfButtonGrid from './WolfButtonGrid';
import Screen from './Screen';
import './Calculator.css';

export const operations = {
    '√': (x) => parseFloat(x) + parseFloat(x),
    '^': (x, y) => parseFloat(x) - parseFloat(y),
    'cos': (x, y) => parseFloat(x) * parseFloat(y),
    'tan': (x, y) => parseFloat(x) / parseFloat(y),
    'sen': (x, y) => parseFloat(y) * (parseFloat(x) / 100),
};
export const operators = Object.keys(operations);

const getApiData = async (number1, operator, accumulator) => {
    if(!number1 && operator != '^'){
        const response = await fetch(`/api/v2/query?appid=XA3Y4W-2EP6LQJ3W6&input=${operator}%20${accumulator}&output=json`);
        if (response.ok) {
            const data = await response.json();
            if (data.queryresult.success) {
                const apiResponse = (data.queryresult.pods.find(({ id }) => id === 'Result')) ? data.queryresult.pods.find(({ id }) => id === 'Result')?.subpods[0]?.plaintext : data.queryresult.pods.find(({ id }) => id === 'DecimalApproximation')?.subpods[0]?.plaintext
                return apiResponse.substring(0, 28);
            }
        }
    }else if(number1){
        return 'Syntax Error';
    }
    throw new Error(`Error al calcular ${number1} ${operator} ${accumulator}`);
};

export function WolframCalc({ setLogList }) {
    const [isOff, setIsOff] = useState(false);
    const [number1, setNumber1] = useState(null);
    const [operator, setOperator] = useState(null);
    const [accumulator, setAccumulator] = useState('');

    async function addData (input) {
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
                        const apiData = await getApiData(number1, operator, accumulator);
                        setAccumulator(apiData);
                        setLogList((previousLogs) => {
                            const newLogs = {
                                calculo: `${number1} ${operator} ${accumulator}`,
                                date: new Date(),
                            }
                            return [...previousLogs, newLogs]
                        }
                        )
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
                        if(accumulator.length < 28) setAccumulator(accumulator + input);
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
