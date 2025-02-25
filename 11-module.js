const path = require('path')
console.log(path.sep)

const filePath = path.join('/path','second', 'second.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'/path','one.txt')
console.log(absolute)