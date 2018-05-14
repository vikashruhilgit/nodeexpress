var methods = module.exports = {
  check: 1,
};

this.check1 = 3;

methods.updateMsg = function () {
  console.log('updayte msg');
};

methods.addMsg = function () {
  console.log('updayte msg');
};

methods.node = function () {
  console.log('node msg');
};

module.exports.data = this;
