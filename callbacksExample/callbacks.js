import fs from 'fs';

// Programación síncrona
// const data = fs.readFileSync('input.txt');

// Programación asíncrona
const cb = (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data.toString());
}

fs.readFile('input.txt', cb);

// process.nextTick()
// process.setTimeout(() => {
    
// }, timeout);

// process.setImediate()

// contenido de un array a un callback >> array de numero*2

// console.log(data.toString());
console.log('-----------fin de programa-----------');