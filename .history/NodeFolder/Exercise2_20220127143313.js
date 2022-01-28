const dt = require('./MyModule');
const http = require('http');


const server = http.createServer(function(request,responce){
    responce.writeHead(200, {'Content-Type': 'text/html'});
    responce.end(`<h2>The Date and Time is: ' + $dt.date()</h2>`);
});


server.listen(8080, () => {console.log('Server Running.....')});