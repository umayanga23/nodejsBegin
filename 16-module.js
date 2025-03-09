const {readFile} = require('fs')

console.log('started a first task')

readFile('./content/fiest.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('complete first task')
})
console.log('starting next task')
// started operating system process
console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')
// compleeted and existed operating system process



setInterval(()=>{
    console.log('hello world')
},2000
)
console.log('i will run first')

//process stays alive unless
//kill process control+c
//unexpected error 



const http = require('http')
const server = http.createServer((req,res)=> {
    console.log('request Event')
    res.end('Hello World')
})
server.listen(5000,()=>{
    console.log('Server listening on port : 5000.....')
})