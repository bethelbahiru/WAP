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
});


server.listen(8080, () => { console.log('Server Running.....')});