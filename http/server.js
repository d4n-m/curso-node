import http, { get } from 'http';

// http.globalAgent.keepAlive = true;

const server = http.createServer();

server.on('request', (request, response) => {
    // response.setHeader('Content-Type', 'text/plain')

    console.log(request.url.split('?')[1]);
    if (request.method == 'GET') {
        response.statusCode = 418;
        response.end('Hola mundo!');
    }

    request.on('data', chunk => {
        // if (chunk.toString().includes('ping')) {
        if (chunk.toString() == 'ping') {
            response.end('pong!');
        }
    })
}).listen(8000);

console.log('Listening on 8000');
