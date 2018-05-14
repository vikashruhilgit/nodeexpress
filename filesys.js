var fs = require('fs');

console.log('Executed file before read.');

fs.readFile('./files/file.txt', 'utf8', filefun);
var data = fs.readFileSync('./files/file.txt', 'utf8');
console.log(data);
console.log('Executed file after read.');

function filefun(err, data) {
  console.log(data);
  console.log(err);
}
