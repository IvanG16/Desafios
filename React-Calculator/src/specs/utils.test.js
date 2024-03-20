import { operations } from '../utils'
import { describe, expect, test } from 'vitest'

/**
 * @vitest-environment jsdom
 */

describe(' operations object', ()=> {
    describe('possible additions', ()=>{
        test(' addition only zeros ', ()=>{
            expect(operations['+'](0, 0)).toBe(0)
        })
        test(' addition where "x" is negative ', ()=>{
            expect(operations['+'](-2, 9)).toBe(7)
        })
        test(' addition where "y" is negative ', ()=>{
            expect(operations['+'](5, -8)).toBe(-3)
        })
        test(' addition where both numbers are negative ', ()=>{
            expect(operations['+'](-3, -3)).toBe(-6)
        })
        test(' addition with decimal points on both numbers ', ()=>{
            expect(operations['+'](0.5, 0.7)).toBe(1.2)
        })
        test(' addition where result is expected to have a decimal ', ()=>{
            expect(operations['+'](2, 0.5)).toBe(2.5)
        })
    })
    describe('possible subtractions', ()=>{
        test(' subtraction only zeros ', ()=>{
            expect(operations['-'](0, 0)).toBe(0)
        })
        test(' subtraction subtraction where "x" is negative ', ()=>{
            expect(operations['-'](-2, 9)).toBe(-11)
        })
        test(' subtraction subtraction where "y" is negative ', ()=>{
            expect(operations['-'](5, -8)).toBe(13)
        })
        test(' subtraction where both numbers are negative ', ()=>{
            expect(operations['-'](-3, -3)).toBe(0)
        })
        test(' subtraction where both numbers are decimals ', ()=>{
            expect(operations['-'](0.5, 0.7)).toBe(-0.2)
        })
        test(' subtraction where result is expected to contain a decimal point ', ()=>{
            expect(operations['-'](2, 0.5)).toBe(1.5)
        })
    })
    describe('possible multiplications', ()=>{
        test(' multiplication only zeros ', ()=>{
            expect(operations['*'](0, 0)).toBe(0)
        })
        test(' multiplication where "x" is negative ', ()=>{
            expect(operations['*'](-2, 9)).toBe(-18)
        })
        test(' multiplication where "y" is negative ', ()=>{
            expect(operations['*'](5, -8)).toBe(-40)
        })
        test(' multiplication where both numbers are negative ', ()=>{
            expect(operations['*'](-3, -3)).toBe(9)
        })
        test(' multiplication with a 1 ', ()=>{
            expect(operations['*'](2, 1)).toBe(0.5)
        })
        test(' multiplication where "y" is a decimal ', ()=>{
            expect(operations['*'](2, 0.5)).toBe(1)
        })
    })
    describe('possible divisions', ()=>{
        test(' division only zeros ', ()=>{
            expect(operations['/'](0, 0)).toBe(0)
        })
        test(' division where "x" is negative ', ()=>{
            expect(operations['/'](-9, 2)).toBe(-4.5)
        })
        test(' division where "y" is negative ', ()=>{
            expect(operations['/'](5, -5)).toBe(-1)
        })
        test(' division where both numbers are negative ', ()=>{
            expect(operations['/'](-3, -3)).toBe(1)
        })
        test(' division where both numbers are decimals ', ()=>{
            expect(operations['/'](0.5, 0.5)).toBe(1)
        })
        test(' division where "y" is a decimal ', ()=>{
            expect(operations['/'](2, 0.5)).toBe(4)
        })
        test(' division where divisor is 0 ', ()=>{
            expect(operations['/'](2, 0)).toBe(Infinity)
        })
    })
    describe('possible combinations with percentages', ()=>{
        test(' percentage with two positive numbers ', ()=>{
            expect(operations['%'](5, 100)).toBe(5)
        })
        test(' percentage ', ()=>{
            expect(operations['%'](0, 10)).toBe(1)
        })
        test(' percentagewhere "y" is negative ', ()=>{
            expect(operations['%'](5, -8)).toBe(-3)
        })
        test(' percentage whereboth numbers are negatve                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', ()=>{
            expect(operations['%'](-3, -3)).toBe(-6)
        })
        test(' percentage where both numbers are decimals ', ()=>{
            expect(operations['%'](0.5, 0.7)).toBe(0.35)
        })
        test(' percentage of zero', ()=>{
            expect(operations['%'](0, 0)).toBe(0)
        })
    })
})
