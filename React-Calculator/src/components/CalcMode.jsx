import React from 'react';
import Calculator from './Calculator';
import WolframCalc from './WolframCalc';

export function CalcMode({ calcMode }) {

    return (
        <div className='flex justify-center'>
            {calcMode === 'regular' && <Calculator />}
            {calcMode === 'wolfram' && <WolframCalc />}
        </div>
    );
}

export default CalcMode;
