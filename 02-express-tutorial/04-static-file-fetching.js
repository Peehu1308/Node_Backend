const express=require("express")
const path=require('path')
const app=express()


// set static and middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     // res.send('hey')
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// adding to static assets
// ssr
// })

app.all('*',(req,res)=>{
    res.status(404).send('resource nit found')
})

app.listen(5000,()=>{
    console.log(`server is listening on 5000`);
})