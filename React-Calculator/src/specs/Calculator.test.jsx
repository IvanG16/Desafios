import Calculator from '../components/Calculator'
import { describe, it, expect, afterEach } from 'vitest'
import { fireEvent, render, cleanup } from '@testing-library/react'

/**
 * @vitest-environment jsdom
 */

describe(' <Calculator />', ()=> {
    const { queryByText, getByText, container } = render(<Calculator />)
    const powerButton = getByText('Off')
    const inputButton = getByText(1)
    afterEach(cleanup);

    it('renders properly', ()=> {
        expect(container).toMatchSnapshot()
    })

    it('turns off correctly', ()=> {
        fireEvent.click(powerButton)

        fireEvent.click(inputButton)
        fireEvent.click(inputButton)
        const multiPress = queryByText('11')

        expect(multiPress).toBeNull()
    })

    it('clears display when turned off', ()=> {
        fireEvent.click(inputButton)
        fireEvent.click(inputButton)

        fireEvent.click(powerButton)
        const multiPress = queryByText('11')

        expect(multiPress).toBeNull()
    })
    
})
