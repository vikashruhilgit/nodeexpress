var fs = require('fs');

console.log('executed code before write');
var writedata = 'hello writing';

//fs.writeFile('./files/file1.txt', writedata, 'utf8', writecalback);
var data = fs.writeFileSync('./files/file2.txt', writedata, 'utf8');
console.log('data writen');

//fs.writeFile('./file/file1.txt', 'utf8', writecalback);

function writecalback(err) {
  if (err) throw err;
  console.log('Done');
}

console.log('executed after write file.');
