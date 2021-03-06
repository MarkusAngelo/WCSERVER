var http = require('http'); 

var create = http.createServer(function(req, res) { 

    if (req.url == '/') {   
        res.writeHead(200, { 'Content-Type': 'text/html'});

        res.write('<html><body><h1>Welcome to my Node.js Application</h1><p>Welcome John Smith. This is an activity about basics of Node.js</p></body></html>');
        res.end;
    }

    else if (req.url == '/about') {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the About Page</h1><p>Hello John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>');
        res.end();
    }

    else if (req.url == '/contact') {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the Contact Page</h1><p>John Smith, if you want additional details about this activity go to this site: <a href="https://www.tutorialsteacher.com/nodejs/nodejs-tutorials">https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</a></p></body></html>');
        res.end();
    }

    else if (req.url == '/gallery') {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the Gallery Page</h1></body></html>');
        res.end();
    }

    else
        res.end('Invalid Request!');
});

create.listen(4000);

console.log('Node.js web server at port 4000 is running...')

// Laus, Mark Angelo T.
// February 2, 2022
// WD-201