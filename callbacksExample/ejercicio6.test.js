import { exp, add } from "./ejercicio6.js"

describe('promises',()=>{
//     describe('Testing promiseFn',()=>{
//         test('PromiseFn(1,1) should return 2', ()=>
//         promiseFn(1,1).then(data => expect(data).toBe(2)))
//     })
// // describe('sample', test)  
    describe('testing exp', () =>
        test('exp(2) should return 4', () => {
            return exp(2).then(data => expect(data).toBe(4))
        }),

        test('exp(11) should return error', () => {
            expect.assertions(1);
            return exp(11).catch(error => expect (error.message).toBe("Result is > 100!"))
        }))

})