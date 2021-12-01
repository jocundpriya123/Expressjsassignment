const express = require('express')
const anonymRoute = require('./anonym')
const ifelseRoute =require('./ifelse')
const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to my API')
})

app.use('/',anonymRoute)
app.use('/',ifelseRoute)

app.listen(8000,()=>{
    console.log('server started on port 8000')
})