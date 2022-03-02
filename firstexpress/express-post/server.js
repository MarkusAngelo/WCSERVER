//Laus, Mark Angelo T.    WD-201
//Server.js [POST]
//Testing POST Object in Express

var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));

app.get('/index.html', function(req, res){
    res.sendFile( __dirname + "/" + "index.html" );
});

  app.post('/process_post', urlencodedParser, function(req, res) {
    response = {
      fname: req.body.fname,
      lname: req.body.lname,
      stud_course: req.body.stud_course,
      age: req.body.age,
      comments: req.body.comments
    };
    console.log(response);
    res.end(JSON.stringify(response));
  });

  var server = app.listen(2001, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
  });