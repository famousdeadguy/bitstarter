var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(getFile('index.html'));
  //response.send(Buffer.toString(fs.readFileSync('index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

function getFile(filename){
  var bf = fs.readFileSync(filename);
  return bf.toString('utf-8');
};
