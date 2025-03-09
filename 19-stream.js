const {createReadStream} = require('fs');

const stream = createReadStream('./content/second.txt',{
    highwaterMark: 9000,
    encoding: 'utf8'
});
stream.on('data', (result)=>{
    console.log(result);
})