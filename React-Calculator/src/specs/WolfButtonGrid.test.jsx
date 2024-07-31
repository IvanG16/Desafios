import WolfButtonGrid from '../components/WolfButtonGrid'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { fireEvent, render, cleanup } from '@testing-library/react'

/**
 * @vitest-environment jsdom
 */

describe(' <WolfButtonGrid />', ()=> {
    const handleOnClick = vi.fn();

    afterEach(cleanup);

    it('renders properly', ()=> {
        const { container } = render(<WolfButtonGrid handleClick={handleOnClick}/>);
        expect(container).toMatchSnapshot()
    })

    it('outputs properly ', ()=> {
        const { getByText } = render(<WolfButtonGrid handleOnClick={handleOnClick}/>)
        const button = getByText('1')

        fireEvent.click(button)

        expect(handleOnClick).toHaveBeenCalledWith(1)
    })
})
