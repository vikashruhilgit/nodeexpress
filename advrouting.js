var express  = require('express');

var app = express();
var router = express.Router();

app.use('/route', router);

router.get('/', function (req, res) {
  res.end('i am in route/');
});

router.get('/route1', function (req, res) {
  res.end('i am in route/route1');
});

router.get('/route2', function (req, res) {
  res.end('i am in route/route2');
});

app.get('/', function (req, res) {
  res.end('home page');
});

app.listen('8080', listenFun);

function listenFun() {
  console.log('listening');
}
