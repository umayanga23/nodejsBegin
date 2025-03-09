const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('response',(name,id)=>{
    console.log(`data recived User: ${name} with id: ${id}`)
})
customEmitter.emit('response','umayanga',1245)
customEmitter.on('response',()=>{
    console.log(`Some other logic here`)
})



customEmitter.emit('response')


