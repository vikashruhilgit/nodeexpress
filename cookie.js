var express = require('express');
var cookie = require('cookie-parser');

var app = express();
app.use(cookie());
app.listen('8080', listenFun);
function listenFun() {
  console.log('listening.');
}

app.get('/', init);

function init(req, res) {
  res.cookie('firstcokkie', 'yes i did it.');
  res.end('hello, cookie created.');
}

app.get('/removecookie', remove);

function remove(req, res) {
  res.clearCookie('firstcokkie');
  res.end('cookie deleted');
}
