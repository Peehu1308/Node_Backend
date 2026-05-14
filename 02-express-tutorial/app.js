const express=require('express');
const app=express();
const 
const logger=require('./logger.js')
const authorize=require('./authorize.js')
// req=>middleware=>res

app.use([logger,authorize])

// app.use('/api',logger);
// api/home/about/products

// app.get('/',logger,(req,res)=>{
    
//     res.send('Home')
// })
app.get('/',(req,res)=>{
    
    res.send('Home')
    console.log(req.user)
})

app.get('/about',(req,res)=>{
    
    return res.send('About');
})
app.get('/api/products',(req,res)=>{
    
    return res.send('products');
})
app.get('/api/items',(req,res)=>{
    
    return res.send('items');
})

app.listen(5000,()=>[
    console.log('server is listening')
])