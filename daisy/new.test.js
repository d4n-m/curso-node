const rewire = require("rewire")
const _new = rewire("./new")
const deshojarDaisy = _new.__get__("deshojarDaisy")
const printResult = _new.__get__("printResult")
const printBlue = _new.__get__("printBlue")
const printRed = _new.__get__("printRed")
// @ponicode
describe("deshojarDaisy", () => {
    test("0", async () => {
        await deshojarDaisy()
    })
})

// @ponicode
describe("printResult", () => {
    test("0", () => {
        let callFunction = () => {
            printResult("Dwarf Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            printResult("Saltwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            printResult("Nile Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            printResult("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            printResult("me quiere")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            printResult(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("printBlue", () => {
    test("0", () => {
        let callFunction = () => {
            printBlue("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            printBlue("Australian Freshwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            printBlue("Saltwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            printBlue("Dwarf Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            printBlue("Nile Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            printBlue(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("printRed", () => {
    test("0", () => {
        let callFunction = () => {
            printRed("Saltwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            printRed("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            printRed("Dwarf Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            printRed("Nile Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            printRed("Australian Freshwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            printRed(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
