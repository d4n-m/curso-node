import fs from 'fs';

const outputStream = fs.createWriteStream('output.txt');

process.stdin.pipe(outputStream);