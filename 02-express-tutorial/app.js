const express=require('express');
const app=express();

// req=>middleware=>res

app.get('/',(req,res)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear();
    console.log(method,url,time);
    return res.send('Home')
})

app.get('/about',(req,res)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear();
    console.log(method,url,time);
    return res.send('About');
})

app.listen(5000,()=>[
    console.log('server is listening')
])