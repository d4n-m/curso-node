import { DaisyGame } from './daisy.js'
import {describe, expect, test} from '@jest/globals'

describe('Sample', ()=>{
    let daisy;

    beforeEach(() => {
        daisy = new DaisyGame();
    })
    test('1+1 =2', ()=>{
        expect(1+1).toBe(2);
    })

    test('should be an instance of Daisy', ()=>{
        expect(daisy).toBeInstanceOf(DaisyGame);
    })

    test('play() should call deshojarMargarita()', async () => {
        const spyDeshojarMargarita = jest.spyOn(daisy, 'deshojarMargarita').mockImplementation(()=>Promise.resolve('me quiere'));
        const spyPlay = jest.spyOn(daisy, 'play')
        await daisy.play();
        expect(spyDeshojarMargarita).toHaveBeenCalledTimes(1);
    })

})

