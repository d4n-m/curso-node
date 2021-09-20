// function ArrayDiff  (a, b) {
//     a.forEach(i => {
//        b.forEach(j => {
//            if (i == j) {
//                a = a.filter(item => item != i)
//            }
//        }) 
//     });
//     return a;
// }

// Refactor

function ArrayDiff (a, b) {
    return a.filter(item => !b.includes(item));
}

function squareDigits(num){
    //   let str = num.toString();
    //   let result = [];
      
    //   str.split('').forEach(item => {
    //     result.push(Math.pow(item, 2));
    //   })
    //   return parseInt(result.join(''));
    return +num.toString().split('').map(i => i*i).join('');
    }

export {ArrayDiff,squareDigits}