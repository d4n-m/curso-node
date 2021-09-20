import { ArrayDiff, squareDigits} from '../codewars1.js';

describe ('ArrayDiff(a, b) should pass simple tests: ', () => {
    test('[] - a was [], b was [4, 5]', () => {
        let a = [];
        let b = [4, 5];
        expect(ArrayDiff(a, b)).toStrictEqual([]);
    });
    
    test('[4] - a was [3,4], b was [3]', () => {
        let a = [3, 4];
        let b = [3];
        expect(ArrayDiff(a, b)).toStrictEqual([4]);
    });
    
    test('[1,8,2] - a was [1,8,2], b was []', () => {
        let a = [1,8,2];
        let b = [];
        expect(ArrayDiff(a, b)).toStrictEqual([1,8,2]);
    });

    test('[3] - a was [1,2,3], b was [1,2]', () => {
        let a = [1,2,3];
        let b = [1,2];
        expect(ArrayDiff(a, b)).toStrictEqual([3]);
    })
});

describe ('squareDigits(num) should pass simple tests: ', () => {
    test('num was 3242', () => {
        let num = 3242;
        
        expect(squareDigits(num)).toStrictEqual(94164);
    });
    
});