
// import chalk from 'chalk';
// import  { red, blue } from 'nanocolors';
const nanocolors = require('./node_modules/nanocolors/');


// console.log(nanocolors.blue("okkk"));
class DaisyGame {
    async play() {
        try {
            this.message = 'me quiere';
            let result = await this.deshojarMargarita();
            this.printBlue(result);
        } catch (error) {
            console.log(error);
        }
    }

    startInterval(resolve, reject) {
        const id = setInterval(() => {
            console.log(this.message);
            this.setMessage();
            this.petals--;
            if (this.petals == 1) {
                clearInterval(id);
                // resolve(message);
                if (this.message == 'me quiere') {
                    resolve(this.message);
                } else reject(this.message)
            }
        }, 10)
    }

    async deshojarMargarita() {
        this.setPetals();
        // let resultado = await this.startInterval();
        // return resultado;
        return new Promise(this.startInterval.bind(this));
    }

    setPetals() {
        this.petals = Math.floor(Math.random() * 10 + 1);
    }
    setMessage() {
        this.message = (this.message == 'me quiere') ? 'no me quiere' : 'me quiere';
    }

    printBlue(message) {
        console.log(blue.blue(message));
    }

    printRed() {
        console.log(red(message));
    }
}

// let game = new DaisyGame();
// game.age = 12;
// console.log(game.age);
// game.play();

module.exports = { DaisyGame, nanocolors }