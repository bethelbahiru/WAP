const http = require('http');
var url = require('url');
var fs = require('fs');
var addmod = require('./addmod.js');

const server = http.createServer(function(request, responce) {
    var q = url.parse(request.url, true);
    var filename = "." + q.pathname;
    if(q.pathname == "/addmod.js") {
        addmod.add(request,responce,q.query);
    }
    else 
    fs.readFile(filename, function(err, data) {
        if (err) {
        responce.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
        }
        res.writeHead(200); 
        res.write(data);
        return res.end();
    });
});


server.listen(8080, () => { console.log('Server Running.....')});