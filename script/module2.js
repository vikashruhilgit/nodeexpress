var data = require('./mainmodule');
data.currentUrl = 'google.com';

//console.log(data);
var datafun = data.stateModule();

//console.log(datafun);
datafun.name('nisha', 'singh');
datafun.printName();
