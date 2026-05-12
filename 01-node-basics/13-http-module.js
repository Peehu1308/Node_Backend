const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end('welcome to our homepage')
    }
    else if(req.url==='/about'){
        return res.end('here is out description')
    }
    return res.end(

        `
        <h1>Oops!!</h1>
        <p>we cant find teh page that you are looking for</p>
        <a href='/'>go back home</a>
        `
    )
})

server.listen(5000)