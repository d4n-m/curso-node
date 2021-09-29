// Given a number N return the index value of the Fibonnaci sequence

function fib(N) {
    if (N<=1) return 1;

    return fib(N-1) + fib(N-2);
}

for (let i=0; i<1000; i++){
    console.log(i, " : ", fib(i));
}
// console.log(fib(5));
// console.log(fib(8));