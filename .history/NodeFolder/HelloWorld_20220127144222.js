const http = require('http');

const server = http.createServer(function(request, responce){
    responce.writeHead(200, {'Content-Type': 'text/html'});
    responce.write(`<h1><strong>Hello World!</strong></h1>`);
    responce.write(`<h1><strong>Hello World!</strong></h1>`);
    responce.end();
});

server.listen(8080, () => {  console.log('Server is running.....'); }
);