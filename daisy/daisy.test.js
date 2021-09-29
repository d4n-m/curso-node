// const nanocolors = require('./node_modules/nanocolors/');
const DaisyGame = require("./daisy.js")



const daisy = require("./daisy")
// import { DaisyGame } from './daisy.js'
// import {jest} from '@jest/globals'
// import { red, blue } from 'nanocolors'


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

// @ponicode
describe("play", () => {
    let inst

    beforeEach(() => {
        inst = new daisy.DaisyGame()
    })

    test("0", async () => {
        await inst.play()
    })
})

// @ponicode
describe("startInterval", () => {
    let inst

    beforeEach(() => {
        inst = new daisy.DaisyGame()
    })

    test("0", () => {
        let callFunction = () => {
            inst.startInterval("George", "Exception not raised: %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.startInterval("Anas", "unexpected error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.startInterval("George", "\n\nThe first error message:\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.startInterval("Edmond", "Wait time out reached, while waiting for results")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.startInterval("Michael", "To force deletion of the LAG use delete_force: True")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.startInterval(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deshojarMargarita", () => {
    let inst

    beforeEach(() => {
        inst = new daisy.DaisyGame()
    })

    test("0", async () => {
        await inst.deshojarMargarita()
    })
})

// @ponicode
describe("setPetals", () => {
    let inst

    beforeEach(() => {
        inst = new daisy.DaisyGame()
    })

    test("0", () => {
        let callFunction = () => {
            inst.setPetals()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setMessage", () => {
    let inst

    beforeEach(() => {
        inst = new daisy.DaisyGame()
    })

    test("0", () => {
        let callFunction = () => {
            inst.setMessage()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("printBlue", () => {
    let inst

    beforeEach(() => {
        inst = new daisy.DaisyGame()
    })

    test("0", () => {
        let callFunction = () => {
            inst.printBlue("No error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.printBlue("Counterparty sent error: %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.printBlue("Top level object in 'override.yml' needs to be an object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.printBlue("This is an exception, voilà")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.printBlue("Could not find a submission object for message from xqueue")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.printBlue(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("printRed", () => {
    let inst

    beforeEach(() => {
        inst = new daisy.DaisyGame()
    })

    test("0", () => {
        let callFunction = () => {
            inst.printRed()
        }
    
        expect(callFunction).not.toThrow()
    })
})
