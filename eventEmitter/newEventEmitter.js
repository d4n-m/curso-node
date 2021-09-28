import EventEmitter from 'events';
import {red,blue} from 'nanocolors'

const emitter = new EventEmitter();

const handler = data => console.log(red(Math.floor(data/60000)));
const handler2 = data => console.log(blue(Math.floor(data/1000)));

emitter.on('date_now', handler)
emitter.on('date_now', handler2)

setInterval(_=>emitter.emit('date_now', Date.now()),1000);