const express = require("express");
const app = express()
const port =3000
const postsrouter = require(/routers/posts)

app.use("/posts",postsrouter)


app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`);
    
})