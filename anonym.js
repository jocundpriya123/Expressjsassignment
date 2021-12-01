const express = require('express')
const route = express.Router()

route.get('/greetings',(req,res)=>{
    res.send('Welcome Anonymous')
})

module.exports =route;