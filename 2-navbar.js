const http = require('http');
const {readFileSync} = require('fs');

//get all files
const homePage = readFileSync('navbar-app/index.html')
const homeStyle = readFileSync('navbar-app/style.css')
const homeLogo = readFileSync('navbar-app/logo.jpeg')
const homeJs = readFileSync('navbar-app/browser-app.js')


const server =  http.createServer((req,res)=>{
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/style.css'){
        res.writeHead(200,{'content-type':'text/css '})
        res.write(homeStyle)
        res.end()
    }
    else if(url === '/logo.jpeg'){
        res.writeHead(200,{'content-type':'image/jpeg '})
        res.write(homeLogo)
        res.end()
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript '})
        res.write(homeJs)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html '})
        res.write('<h1>About page</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html '})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    
})
server.listen(5000)
