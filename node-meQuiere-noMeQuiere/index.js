// Ejercicio node-meQuiere-noMeQuiere#
// Deshoja la margarita y descubre si tu amad@ te quiere o no te quiere.

// Descripción
// Partís de una margarita de número variable de pétalos.
// Deshojar la margarita significa arrancarle un pétalo cada segundo (tip: pensad 
// en setInterval())
// Cada pétalo "arrancado" significa imprimir en pantalla "me quiere!" o "no me quiere!!!".
// El programa resolverá con el valor último pintado en AZUL si me quiere o en ROJO si no 
// me quiere (tip: chalk)

// Detalles
// Devuelve una promesa con el mensaje que toque y encadena la impresión por la consola.

import { red, blue, bold } from 'nanocolors'

var numPetals = Math.floor(Math.random() * 9) + 1;

async function deshojar() {
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(arrancar(numPetals)), 1000)
  });
    try {
    let result = await promise; 
    return(result)
    } catch (error) {
        console.log("Error: " + error);
    }
}

async function arrancar(petals) {
    let promise = new Promise((resolve, reject) => {
    let count = 0;
    let message = "";
        for (let i = petals; i > 0; i--) {
        petals -= 1;
        if (petals > 0) {
            if (count % 2 == 0) {
                message = blue(`${bold('Me quiere!')}`);
                count+=1
            } else {
                message = red(`${bold('No')} me quiere!`);           
                count+=1
            }
        }  
    console.log('✔ Arranqué un pétalo');
    }resolve(message)
})
    let result = await promise; 
    return(result)
}

console.log(await deshojar());