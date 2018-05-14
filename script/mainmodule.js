module.exports.currentUrl = 'yahoo.com';

module.exports.stateModule = function () {
  var printNamevar;

  return {
    name: function (first, last) {
      this.printNamevar = first + ' ' + last;
    },

    printName: function () {
      console.log(this.printNamevar);
    },
  };
};

module.exports.test1 = 'test1';
