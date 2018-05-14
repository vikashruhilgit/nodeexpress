var express = require('express');

var app = express();

app.listen('8080', listenFun);
function listenFun() {
  console.log('listening.');
}

app.get('/', init);

function init(req, res) {
  res.end('hello, i am upadted. Yay!!! update work automaticly.');
}
