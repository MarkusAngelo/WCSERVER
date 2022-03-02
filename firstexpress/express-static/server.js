//Laus, Mark Angelo T.    WD-201
//server.js [STATIC]
//Testing Static in Express

const { response } = require("express");
  var express = require("express");
  var app = express();

  app.use(express.static('public'));

  app.get("/", function(request, response){
    response.send("Successfully created the second App!");
});

  var server = app.listen(2001, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port);
    }
  );