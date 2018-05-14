var event = require('events');
var eventEmitter = new event.EventEmitter();

eventEmitter.on('myevent', funfire);

function funfire(a,b) {
  console.log('yes!! i am fired.' + ' ' + a + ' ' + b);
}

setTimeout(firefun, 3000);

function firefun() {
  eventEmitter.emit('myevent', 'yes,', 'i know.');
}
