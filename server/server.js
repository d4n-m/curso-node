import http from 'http';

const server = http.createServer();

server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  let timesince = Date.now();
  let today = new Date(timesince);

  res.write('Hello World! <br> Today is: ' + today.toLocaleString());
  res.end();
});

server.listen(4000);