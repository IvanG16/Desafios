import React from 'react';
import WolfButtonGrid from './WolfButtonGrid';
import Screen from './Screen';

export function CalculatorShell({ accumulator, isOff, addData }){
    return (
        <div className="w-[425px] h-[520px] bg-orange-500 rounded-[20px] flex-col justify-start items-start inline-flex">
            <Screen
                data={accumulator}
                isOff={isOff}
            />
            <WolfButtonGrid
                handleOnClick={addData}
            />
        </div>
    )
}

export default CalculatorShell;
