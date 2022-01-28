const dt = require('./MyModule');
const http = require('http');


const server = http.createServer(function(request,responce){
    responce.writeHead(200, {'Content-Type': 'text/html'});
    responce.end('The Date and Time is:' + dt.date);
});


server.listen(8080, () => )