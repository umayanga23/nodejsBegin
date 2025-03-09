const {writeFileSync} = require('fs')
for(let i = 0;i<100;i++){
    writeFileSync('./content/second.txt',`hello world ${i}\n`,{flag:'a'})
}