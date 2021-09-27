const cadenaInicio = Buffer.from('Hola Mundo');


const cadenaFin = Buffer.concat([
    Buffer.from('h'),
    cadenaInicio.slice(1,4),
    Buffer.from('m'),
    cadenaInicio.slice(6)
]).toString();

console.log(cadenaFin);
