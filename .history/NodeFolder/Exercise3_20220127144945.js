const http = require('http');


const server = http.createServer(function(request, responce) {
    re
    responce.write(request.url);
    responce.end();
});


server.listen(8080, () => { console.log('Server Running.....')});