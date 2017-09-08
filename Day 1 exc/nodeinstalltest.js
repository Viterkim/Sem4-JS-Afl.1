var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Sut Mig');
}).listen(5555, 'localhost');

console.log('Dårlig server på localhost:5555');