import React from 'react';

export function Logs({ logList }) {
    const formatDate = date => `${date.getDate()} ${date.getMonth() + 1} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const logComponents = logList.map( logEntry => {
        return (
            <div className="w-full h-[45px] p-2.5 bg-white rounded-[5px] justify-between items-center inline-flex my-[0.5%]">
                <div className="text-black text-2xl font-normal font-['Inconsolata']">
                    {logEntry.calculo}
                    </div>
                <div className="text-black text-2xl font-normal font-['Inconsolata']">
                    {formatDate(logEntry.date)}
                    </div>
            </div>
        )
    })

    if(logComponents){
        return (
            <div className='flex flex-col w-[75%]'>
                {logComponents}
            </div>
        );
    }
}

export default Logs;
