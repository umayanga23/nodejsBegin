const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.status(200).send('home page')
})
app.get('/about',(req,res)=>{
    res.status(200).end('about page')
})

app.all('*',(req,res)=>{
    res.status(404).end('<h1>Resource not found</h1>')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})