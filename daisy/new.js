// async function deshojar() {
//     let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(arrancar(numPetals)), 1000)
//   });
//     try {
//     let result = await promise; 
//     return(result)
//     } catch (error) {
//         console.log("Error: " + error);
//     }()
// }
import { red, blue } from 'nanocolors';

const deshojarDaisy = async () => {
    let message = 'me quiere';
    let petals = Math.floor(Math.random() * 10 + 1);
    let pr = await new Promise((resolve, reject) => {
        const id = setInterval(() => {
            console.log(message);
            message = (message == 'me quiere') ? 'no me quiere' : 'me quiere';
            petals--;
            if (petals == 0) {
                clearInterval(id);
                // resolve(message);
                if (message == 'me quiere') {
                    resolve(message);
                } else reject(message)
            }
        }, 1000)
    })
    return pr;
}

const printResult = (mensaje) => {
    if (mensaje == 'me quiere') {
        console.log(blue(mensaje));
    } else console.log(red(mensaje));
}

const printBlue = (mensaje) => console.log(blue(message));
const printRed = (mensaje) => console.log(red(message));

(() => deshojarDaisy()
        .then(printBlue)
        .then(printRed)
    )();