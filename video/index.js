import http from 'http';
import fs from 'fs';

const server = http.createServer();

server.on('request', (req, res) => {
	// res.writeHead(200, {'Content-Type': 'video/mp4'});
	res.writeHead(200, { 'Content-Type': 'video/mp4' });
	const rstream = fs.createReadStream('./jump-into-water.mp4');
	rstream.pipe(res);
});

server.listen(8080);
console.log('Listening on port 8080');