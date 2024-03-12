import Button from '../components/Button'
import { describe, it, expect } from 'vitest'
import { fireEvent, render } from '@testing-library/react'

/**
 * @vitest-environment jsdom
 */

describe('<Button />', ()=>{
    it('renders properly',()=> {
        const { container } = render(<Button />)
        expect(container).toMatchSnapshot()
    })
    it('outputs properly', ()=>{
        const { container } = render(<Button />)
        fireEvent.click()
        expect(container).to
    })
})
