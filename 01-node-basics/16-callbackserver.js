const http=require('http')

const server=http.createServer((req,res)=>{
    console.log('request event')
    res.end('hello world')
})

server.listen(7000,()=>{
    console.log('erver listening on port:5000...')
})