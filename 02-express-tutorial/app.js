const express=require('express');
const app=express();

// req=>middleware=>res

app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(res,req)=>{
    res.send('Home');
})

app.listen(5000,()=>[
    console.log('server is listening')
])