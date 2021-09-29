import rewire from 'rewire';
const ej9 = rewire("./ej9")
const handlerOneSecond = ej9.__get__("handlerOneSecond")
const handlerHalfSecond = ej9.__get__("handlerHalfSecond")
// @ponicode
describe("handlerOneSecond", () => {
    test("0", () => {
        let callFunction = () => {
            handlerOneSecond()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handlerHalfSecond", () => {
    test("0", () => {
        let callFunction = () => {
            handlerHalfSecond()
        }
    
        expect(callFunction).not.toThrow()
    })
})
