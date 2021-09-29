import http from 'http';

const server = http.createServer();

server.on('request', (req, res)=> {
    res.setHeader('Content-Type', 'text/html')
    res.end('<video autoplay muted src="http://localhost:8080"></video>')
}).listen(9000);

console.log('Running on 9000');