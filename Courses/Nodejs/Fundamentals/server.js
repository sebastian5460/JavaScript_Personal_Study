
const http = require('http');

http.createServer( function(req, res) {
    
    res.writeHead(404, { 'Content-type': 'text/html'});
    res.write('<h1>Hello World from node.js</h1>');
    res.end;
}).listen(3000);

