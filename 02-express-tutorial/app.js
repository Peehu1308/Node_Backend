const express= require('express');

const app=express()

app.get('/',(req,res)=>{
    console.log("user hit the resource")
    res.send('Home page')
})

app.get('/about',(req,res)=>{
    res.send('About page')
})
app.

app.listen(5000,()=>{
    console.log(`server is listening to port 5000`)
})


// METHODS THAT WE WILL USE
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen


