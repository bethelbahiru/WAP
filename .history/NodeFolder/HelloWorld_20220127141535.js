const http = require('http');

const server = http.createServer(function(request, responce){
    responce.writeHead(200, {'Content-Type': 'text/html'});
    responce.end(`<strong>Hello World</strong>`);
});

server.listen(8080, () => {  console.log('Server is running.....'); }
);