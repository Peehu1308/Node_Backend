const http=require('http')

const server=http.createServer();
server.on('request',(req,res)=>{
    // here events whenever a browser/client sends an HTTP request.
    if(req.url==='/'){
        return res.end('welcome')
    }
})
server.listen(5000)