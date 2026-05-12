const http=require('http')
const {readFileSync}=require('fs');

const homepage=readFileSync('./navbar-app/index.html')
const homestyle=readFileSync('./navbar-app/styles.css')
const homelogo=readFileSync('./navbar-app/logo.svg')
const homelogic=readFileSync('./navbar-app/browser-app.js')


const server=http.createServer((req,res)=>{


    console.log(req.url);
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()


    //     res.writeHead(200,{'content-type':'text/html'})
    
    // res.write('<h1>home page</h1>')
    // res.end();
    }
    else if(req.url==='/logo.svg'){
          res.writeHead(200,{'content-type':'image/svg+xml'})
    
    res.write(homelogo)
    res.end();
    }
     else if(req.url==='/browser-app.js'){
          res.writeHead(200,{'content-type':'text/javascript'})
    
    res.write(homelogic)
    res.end();
    }
    else if(req.url==='/styles.css'){
          res.writeHead(200,{'content-type':'text/css'})
    
    res.write(homestyle)
    res.end();
    }
    else if(req.url==='/about'){
          res.writeHead(200,{'content-type':'text/html'})
    
    res.write('<h1>about page</h1>')
    res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
    
    res.write('<h1>page not found</h1>')
    res.end();
    }
})
server.listen(9000)
