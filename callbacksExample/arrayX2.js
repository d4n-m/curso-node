const array = [3, 6, 9, 21];

const mapFunction = (array,cb)=> {
    setTimeout(()=> array =>
    {
        let newArray = [];
        for(let i = 0; i<array.length; i++){
            newArray.push(array[i] * 2);
        }
        setTimeout(()=>console.log(newArray));
    },100)
}

const sumarArray = array => {
    let acumulador = 0;

    for (let i = 0; i<array.length; i++){
        acumulador += array[i];
    }
    return acumulador;
}

const divideArray = array => {
    let result = 0;
    for (let i = 0; i < array.length; i++){
        result += array[i] / 2; 
    }
    console.log(result);
}

// let multiplica = mapFunction(array, multiplicaArray);
// let suma = mapFunction(array, sumarArray);
let divide = setTimeout(mapFunction(array, divideArray));


// console.log(array);
// console.log(multiplica);
// console.log(suma);
console.log(divide);

