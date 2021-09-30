// Needs to read from console > transform to UPPER > save string to file

import fs from 'fs';
import process from 'process';
import { Transform } from 'stream';

const rstream = process.stdin;
const wstream = fs.createWriteStream("./new_file.txt");

// process.stdin.setRawMode(true);

console.log("\nEnd with triple-dots. Enter input: ");

const upperCaseTr = new Transform({
    transform(chunk, encoding, callback){
        // End with triple-dots
        if (chunk.toString().includes('...')){
            process.kill(process.pid, 'SIGTERM')
        }
        this.push(chunk.toString().toUpperCase());
        callback();
}})

rstream.pipe(upperCaseTr).pipe(wstream);