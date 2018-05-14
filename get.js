var express = require('express');

var app = express();

app.listen('8080', listenFun);

function listenFun() {
  console.log('listning');
}

app.get(/(.+)/, init);

function init(req, res) {
  res.end(JSON.stringify(req.query));
}
