var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function(req, res) { // 2 - Creating Server

    if (req.url == '/') {   // 3 - Checks the URL of the current request

        // 4 - Set Response header
        res.writeHead(200, { 'Content-Type': 'text/html'});

        // 5 - Set Response Content
        res.write('<html><body><p>This is Home Page.</p></body></html>');
        res.end;
    }

    else if (req.url == '/student') {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>This is Student Page.</p></body></html>');
        res.end();
    }

    else if (req.url == '/admin') {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>This is Admin Page.</p></body></html>');
        res.end();
    }

    else
        res.end('Invalid Request!');
});

server.listen(3000); // 6 - Listen for any incoming requests

console.log('Node.js web server at port 3000 is running...')