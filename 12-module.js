const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./path/second/second.txt','utf8');
const second = readFileSync('./path/one.txt','utf8');

console.log(first);
console.log(second);

writeFileSync(
  './path/second/second.txt',
  `Hello World : ${first} , ${second}`,  // Appending new content with a newline
  { flag: 'a', encoding: 'utf8' }  
);

