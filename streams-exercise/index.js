import fs from 'fs';
import { Transform } from 'stream';

const rstream = fs.createReadStream('./file.txt');

const upperCaseTr = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }

})

rstream.pipe(upperCaseTr).pipe(process.stdout);