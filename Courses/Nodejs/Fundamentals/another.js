

const http = require('http');

http.createServer( function(req, res) {

    res.writeHead(404);
    res.write('<h1>Error Not Found 404 </h1>');
    res.end;
    
}).listen(3000);
