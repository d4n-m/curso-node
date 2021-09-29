//const miArray = require()

// import chalk from "chalk";
// import os from "os";

// let mivar = 'hola';
                      
// export let miArray = ['hola', 'mundo'];

// const otroArray = ['martes', 'pluto'];

// console.log(chalk.redBright(os.platform()));

// export default miArray;

// # Rest Parameters 😴

// With rest parameters, we can gather any number of arguments into an array and do what we want with them. 
// Rest parameters have been introduced to reduce the boilerplate code that was induced by the arguments. 🙌

// function myFunc(a, b, ...args) {
//     console.log(a); // 22
//     console.log(b); // 98
//     console.log(args); // [43, 3, 26]
//    };

//    myFunc(22, 98, 43, 3, 26, 88);

let miArray = [1,2,3,4,5,6,7];

// Rest parameters can be destructured (arrays only), that means that their data can be unpacked into distinct variables.

function myFunc(...[x, y, z]) {
    return console.log(x * y * z);
  }
  
  myFunc(...miArray)
  myFunc(1)          // NaN
  myFunc(1, 2, 3)    // 6
  myFunc(1, 2, 3, 4) // 6 (fourth parameter is not destructured)

//   # Spread parameter

// The spread operator is used to expand elements of an iterable (like an array) into places where multiple elements can fit.
function myFunc2(x, y, ...params) { // used rest operator here
  console.log(x);
  console.log(y);
  console.log(params);
}

var inputs = ["a", "b", "c", "d", "e", "f"];
myFunc2(...inputs); // used spread operator here
// "a"
// "b"
// ["c", "d", "e", "f"]
// There have always been a variety of ways to combine arrays, but the spread operator gives use a new method for combining arrays:
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg pizza', ...specialty];

console.log(pizzas); // 'Deep Dish', 'Pepperoni', 'Hawaiian', 'veg pizza', 'Meatzza', 'Spicy Mama', 'Margherita'
// With spread operator, Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than Object.assign().
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
// 👉 Conclusion
// When we see three dots (…) in the code, it's either rest parameters or the spread operator.

// There's an easy way to distinguish between them:
// When three dots (…) is at the end of function parameters, it's "rest parameters" and gathers the rest of the list of arguments into an array.
// When three dots (…) occurs in a function call or alike, it's called a "spread operator" and expands an array into a list.
// Thanks for reading. I hope you like this article feel free to like, comment or share this article with your friends.

var arr = [2, 100, 4, 8, 6, 0];
var max = Math.max(...arr);

console.log(max);

var str = "hello";
var chars = [...str];

console.log(chars);

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

// console.log('Time: ', today.toDateString()); // "Sun Jun 14 2020"

console.log('Time: ', today.toLocaleString()); // "Sun Jun 14 2020"
