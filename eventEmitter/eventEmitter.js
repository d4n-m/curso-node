import EventEmitter from 'events';

const connectionBBDD = new EventEmitter();

const connectionHandler = ()=>{
    console.log('Connection Successful');
}

connectionBBDD.on('conexion', connectionHandler);

connectionBBDD.emit('conexion');