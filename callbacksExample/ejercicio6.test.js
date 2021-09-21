import { TestWatcher } from "@jest/core"
import { promiseFn } from "./ejercicio6"

describe('promises',()=>{
    describe('Testing promiseFn',()=>{
        test('PromiseFn(1,1) should return 2', ()=>
        promiseFn(1,1).then(data => expect(data).toBe(2)))
    })
    
})