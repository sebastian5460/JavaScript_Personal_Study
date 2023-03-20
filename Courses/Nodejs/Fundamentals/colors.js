


const http = require('http');

const colors = require('colors');

const handleServer = function(req, res) {
    res.writeHead(200);
    res.write('<H1>Hello man</H1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('server on port 3000'.cyan);
})

