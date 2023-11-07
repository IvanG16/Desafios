import React, { useEffect, useState } from 'react';
import CalcMode from './components/CalcMode';
import WolframCalc from './components/WolframCalc';
import Calculator from './components/Calculator';

function App() {
    return (
        <>
            <CalcMode modeType={'Calculator'} />
            <CalcMode modeType={'WolframCalc'} />
        </>
    )
}

export default App;
