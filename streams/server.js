import http from 'http';


const server = http.createServer();

server.on('request', (request, response) => {

    // request.pipe(process.stdout);
    request.pipe(response);
   
})


server.listen(8080);
console.log('Listening on port 8080');