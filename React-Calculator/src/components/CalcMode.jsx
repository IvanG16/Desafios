import React, { useState } from 'react';
import Calculator from './Calculator';
import WolframCalc from './WolframCalc';

export function CalcMode({ modeType }) {
    const [calcState, setCalcState] = useState('Calculator')
    const onClick = () => {
        setCalcState(modeType)
    };

    if (calcState === 'Calculator') {
        return (
            <button onClick={onClick}>
                {calcState}
            </button>
        );
    }
}

export default CalcMode;
