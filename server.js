//var method = require('./method.js');

var http = require('http');

function init(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  console.log(res.url);
  res.end('hello nisha');//
}

function listenfunction() {
  console.log('listening to post nisha.');
}

http.createServer(init).listen(8080, listenfunction);
