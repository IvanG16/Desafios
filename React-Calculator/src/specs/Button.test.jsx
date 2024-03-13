import Button from '../components/Button'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { fireEvent, render, cleanup } from '@testing-library/react'

/**
 * @vitest-environment jsdom
 */

describe('<Button />', ()=>{
    const handleClick = vi.fn()

    const initialProps = {
        value: 1,
        handleClick: handleClick,
        valueType: 'number'
    }

    afterEach(cleanup);
    
    it('renders properly',()=> {
        const { container } = render(<Button {...initialProps}/>)
        expect(container).toMatchSnapshot()
    })
    it('renders properly as operand ',()=> {
        const { container: myVariable } = render(<Button {...initialProps} valueType='operand' value={'+'} />)
        expect(myVariable).toMatchSnapshot()
    })
    it('executes when clicked properly', ()=>{
        const { getByText } = render(<Button {...initialProps} valueType='operand' value={'3'}/>)
        const button = getByText('3');

        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalled();
    })

})
