var express = require('express');
var app = express();

var router = express.Router();

app.get('/', function (req, res) {
  res.end('home page');
});

app.use('/users', router);

router.get('/', function (req, res) {
  res.end('display all user. or what ever you want');
});

//router.get('/:username(regex)', function (req, res) {
router.get('/:me/:you', function (req, res) {
  res.end('here you get the params' + JSON.stringify(req.params));
});

app.listen('8080', function () {
  console.log('listening...');
});
