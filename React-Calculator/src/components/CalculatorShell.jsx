import React from 'react';
import WolfButtonGrid from './WolfButtonGrid';
import Screen from './Screen';
import ButtonGrid from './ButtonGrid';
 
export function CalculatorShell({ accumulator, isOff, addData, type }){
    return (
        <div className="w-[425px] h-[520px] bg-orange-500 rounded-[20px] flex-col justify-start items-start inline-flex">
            <Screen
                data={accumulator}
                isOff={isOff}
            />
            {type === 'regular' && <ButtonGrid
                handleOnClick={addData}
            />}
            {type === 'wolfram' && <WolfButtonGrid
                handleOnClick={addData}
            />}
        </div>
    )
}

export default CalculatorShell;
