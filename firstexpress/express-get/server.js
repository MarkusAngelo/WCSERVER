//Laus, Mark Angelo T.    WD-201
//Server.js [GET]
//Testing GET Object in Express

var express = require("express");
var app = express();

  app.use(express.static('public'));

  app.get('/index.html', function(req, res){
    res.sendFile( __dirname + "/" + "index.html" );
});

  app.get('/process_get', function(req, res) {
    response = {
      fname: req.query.fname,
      lname: req.query.lname,
      stud_course: req.query.stud_course,
      age: req.query.age,
      comments: req.query.comments
    };
    console.log(response);
    res.end(JSON.stringify(response));
  });

  var server = app.listen(2001, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
  });