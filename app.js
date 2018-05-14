var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var session = require('express-session');

var app = express();

//app.use(bodyparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(session({
  secret: 'dfjo4urtp43ui9wpoifd$@oeljr9302',
  resave: false,
  saveUninitialized: true,
}));

app.use('/cssFile', express.static(__dirname + '/assests/css'));

app.get('/', function (req, res) {
  if (req.session.myid) {
    res.redirect('/admin');
  }

  res.sendFile('login.html', { root: path.join(__dirname, '/files') });
});

app.post('/', function (req, res) {
  //res.send(JSON.stringify(req.body));
  if (req.body.username == 'admin' && req.body.username == 'admin') {
    req.session.myid = req.body.username;
  }

  res.redirect('/redirect');
});

app.get('/redirect', function (req, res) {
  //if not properly working use req.session ************************
  if (req.session.myid) {
    res.redirect('/admin');
  } else {
    res.end('not a valid user.');
  }
});

app.get('/admin', function (req, res) {
  if (req.session.myid) {
    res.writeHead(200, { 'Content-Type': 'Text/html' });
    res.write(req.session.myid);
    res.end('<br>hello and welcome admin.<a href ="/removesession">logout</a>');
  } else {
    res.redirect('/redirect');
  }
});

app.get('/removesession', function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });

});

app.listen('8080', function (req, res) {
  console.log('listening ....');
});
