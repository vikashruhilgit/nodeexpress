var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.listen('8080', listenFun);

app.use('/cssFile', express.static(__dirname + '/assests/css'));
app.use('/jsFile', express.static(__dirname + '/assests/js'));
app.use('/imagesFile', express.static(__dirname + '/assests/images'));

app.get('/', init);

function init(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './files') });
}

app.get(/^(.+)$/, routing);

function routing(req, res) {
  try {
    if (fs.statSync(path.join(__dirname, './files') + '/' + req.params[0] + '.html')) {
      res.sendFile(req.params[0] + '.html', { root: path.join(__dirname, './files') });
    }
  }catch (e) {
    //console.log(e);
    res.sendFile('404.html', { root: path.join(__dirname, './files') });
  }
}

function listenFun() {
  console.log('listning.');
}
