import EventEmitter from 'events';

let counterPos = 1;
let counterNeg = 100;
let eachSecond = true;

const handlerOneSecond = () => {
    if (eachSecond) {
        console.log(counterNeg);
        counterNeg--;
    }
    eachSecond = !eachSecond
}

const handlerHalfSecond = () => {
    if (counterPos == counterNeg) {
        // clearInterval(id)
        // emisor.removeAllListeners();
        emisor.emit('end');
    }
    console.log("   " + counterPos);
    counterPos++;
}

const emisor = new EventEmitter();

emisor.on('count', handlerHalfSecond);
emisor.on('count', handlerOneSecond);

emisor.on('end', () => {
    clearInterval(id);
    emisor.removeAllListeners();
})

const id = setInterval(_ => emisor.emit('count'), 500);