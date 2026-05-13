const express=require('express');
const app=express();
const {products,people}=require('./data.js');


app.get('/',(req,res)=>{
    return res.json([products])
})
app.get('/about',(req,res)=>{
    return res.json([people])
})

app.listen(5000,()=>[
    console.log('server is listening')
])