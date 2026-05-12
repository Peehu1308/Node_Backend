const http=require('http')
const {readFileSync}=require('fs');

const homepage=readFileSync('./index.html')
const server=http.createServer((req,res)=>{

    // gives the url
    console.log(req.url)
    
    // gives the method
    console.log(req.method)

    // console.log("user hit the server")
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage)
        res.end()


    //     res.writeHead(200,{'content-type':'text/html'})
    
    // res.write('<h1>home page</h1>')
    // res.end();
    }
    else if(req.url==='/about'){
          res.writeHead(200,{'content-type':'text/plain'})
    
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
