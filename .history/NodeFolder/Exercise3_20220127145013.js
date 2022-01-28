const http = require('http');


const server = http.createServer(function(request, responce) {
    responce.write(``)
    responce.write(request.url);
    responce.end();
});


server.listen(8080, () => { console.log('Server Running.....')});