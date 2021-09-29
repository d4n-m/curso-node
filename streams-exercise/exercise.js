//needs to read from console > transform to UPPER > save string to file

import fs from 'fs';
import { Transform } from 'stream';
import { Writable } from 'stream';


const outStream = new Writable({
    write(chunk, encoding, callback) {
      console.log(chunk.toString());
      callback();
    }
  });
  
  


// const wstream = fs.writeFile('./example.txt');

const upperCaseTr = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        console.log(chunk.toString().toUpperCase());
        callback();
    }

})

process.stdin.pipe(upperCaseTr).pipe(outStream.write('./file.txt'));
// const rstream = process.stdin.read('end', upperCaseTr);
// // process.stdin.read('end', upperCaseTr)
// rstream.pipe(process.stdout);

// rstream.pipe(upperCaseTr).pipe(wstream);


    // process.stdin.setEncoding('utf8');
    // process.stdout.write('¿Cómo estás hoy? ');
    // process.stdin.once('data', function(res) {
    // process.stdout.write('Has respondido: ');
    // process.stdout.write(res);
    // process.stdin.pause();
    // })
