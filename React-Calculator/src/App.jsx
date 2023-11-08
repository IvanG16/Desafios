import React, { useState } from 'react';
import CalcMode from './components/CalcMode';

export function App() {
    const [calcMode, setCalcMode] = useState('regular');

    const styles = 'w-[200px] py-[0.5%] px-[1%] m-[2%] rounded-lg bg-white';
    const selectedStyle = 'w-[200px] py-[0.5%] px-[1%] m-[2%] rounded-lg bg-[#858585] text-white';

    return (
        <>
            <div className='flex justify-evenly my-[2%]'>
                <button onClick={() => setCalcMode('regular')} className={calcMode === 'regular' ? selectedStyle : styles}>
                    Calculator
                </button>
                <button onClick={() => setCalcMode('wolfram')} className={calcMode === 'wolfram' ? selectedStyle : styles}>
                    Wolfram Calculator
                </button>
            </div>
            <CalcMode calcMode={calcMode} />
        </>
    )
}

export default App;
