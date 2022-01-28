const http = require('http');


const server = http.createServer(function(request, responce) {
    responce.write(`<h2>Url</h2>`)
    responce.write(request.url);
    responce.end();
});


server.listen(8080, () => { console.log('Server Running.....')});