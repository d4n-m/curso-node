import EventEmitter from 'events';

const conexionBBDD = new EventEmitter();

const conexionHandler = () => {
    console.log("Connection succesful");
    conexionBBDD.emit('data_received');
}
const handler2 = () => {
    console.log("data received succesfully");
}

conexionBBDD.on('conexion', conexionHandler);
conexionBBDD.on('data_received', handler2);


setTimeout(()=> conexionBBDD.emit('conexion'),2000)