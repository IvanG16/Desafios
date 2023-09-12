import { useEffect } from "react"

const onClick = () => setCount2(() => count2 + 1)

export const CalcButton = ({ number, buttonClick, buttonText}) => {
    const onClick = () => buttonClick(number);

 return (
    <button onClick={onClick} className="mb-8" type="button">
        {buttonText}
        {' '}
        {number}
    </button>
 )
}

export default CalcButton
