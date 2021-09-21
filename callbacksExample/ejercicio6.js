const add = function(x, y) {
    return new Promise((resolve,reject) => {
      if (x == 0 || y == 0) reject(Error("A number cannot be 0"))
      let sum = x + y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Not happening!"));
      }
    });
  };

const exp = (num) => {
    return new Promise((resolve,reject) => {
        let result = Math.pow(num, 2);
        if (result <= 100) {
            resolve(result);
        } else{
            reject(Error("Result is > 100!"));
        }
    })
}

setTimeout(() => {
    add(3,6)
    .then((sum) =>{
        console.log("The sum is: " + sum); //The sum is: 8
        return sum;
    })
    .then(exp)
    .then((result) =>{
        console.log("The result of the elevation is: " + result);
    })
    .catch((err) => {
        console.log("" + err);
    });
},1000)

export const promiseFn = (a,b)=>{
    return new Promise((resolve,reject)=>{
        // setTimeout(_=> (a==0 || b==0)? 
        setTimeout(_=> {
            if (a == 0 || b == 0) {
                reject(new Error('Not allowd'))
            } else {
                resolve(a+b)
            }
    }, 1000)
})}