var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();

app.listen('8080', listenFun);
app.use(bodyparser());

function listenFun() {
  console.log('listning');
}

app.get(/(.+)/, getInit);
function getInit(req, res) {
  res.sendFile('form.html', { root: path.join(__dirname, './files') });
}

app.post(/(.+)/, postInit);

function postInit(req, res) {
  res.end(JSON.stringify(req.body));
}
