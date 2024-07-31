import React, { useState } from 'react';
import Calculator from './Main calculator/Calculator';
import WolframCalc from './Main calculator/WolframCalc';
import Logs from './Logs';

export function CalcMode({ calcMode }) {
    const [logList, setLogList] = useState([{
        calculo: '2+2',
        date: new Date(),
        result: '4',
    }]);
    
    return (
        <div className='flex justify-center'>
            {calcMode === 'regular' && <Calculator setLogList={setLogList} />}
            {calcMode === 'wolfram' && <WolframCalc setLogList={setLogList} />}
            {calcMode === 'logs' && <Logs logList={logList} />}
        </div>
    );
}

export default CalcMode;
