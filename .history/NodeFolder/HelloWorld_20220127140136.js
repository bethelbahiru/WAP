const http = require('http');

const server = http.createServer(function(request, responce){
    responce.writeHead(200, {'Content-Type': 'text/html'});
    responce.end('Hello World!');
});

server.listen(8080, function() {
    console.log("")
});