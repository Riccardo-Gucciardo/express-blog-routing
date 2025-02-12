const express = require("express");
const app = express()
const port =3000
const postsrouter = require('./routers/posts')

app.use('/',(req,res)=>{
    res.send('hello world')
})

app.use("/api/posts",postsrouter)


app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`);
    
})