import WolframCalc from '../components/WolframCalc'
import { describe, it, expect, afterEach, vi} from 'vitest'
import { fireEvent, render, cleanup } from '@testing-library/react'

/**
 * @vitest-environment jsdom
 */

describe(' <WolframCalc />', ()=> {
    const handleOnClick = vi.fn();

    afterEach(cleanup);

    it('renders properly', ()=> {
        const { container } = render(<WolframCalc />);
        expect(container).toMatchSnapshot()
    })
    
})
