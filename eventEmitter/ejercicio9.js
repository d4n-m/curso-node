import EventEmitter from 'events';

const emitter = new EventEmitter();
let count1 = 1;
let count2 = 100;

const handler = data => {
    console.log(`c1: ${count1}`);
    count1++;
    checkF();

    let waitTime = 500;
    setTimeout(() => {
        console.log(`c1: ${count1}`);
        checkF();
        count1++;
    }, waitTime);
}

const handler2 = data => {
    console.log(`       c2: ${count2}`);
    checkF();
    count2--;
}

const checkF = () => {
    if (count1 >= 100) {
        count1 = 1;
    } else if (count2 < 1) {
        count2 = 1;
    }

    if (count1 == count2) {
        clearInterval(id)
        emisor.removeAllListeners();
    }
}

emitter.on('date_now', handler)
emitter.on('date_now', handler2)

const id = setInterval(_ => emitter.emit('date_now', Date.now()), 1000);