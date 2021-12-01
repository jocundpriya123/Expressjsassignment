const express=require('express')
const route=express.Router()


route.get('/hello',(req,res)=>{
    if (req.query.name){
        res.send(`hai ${req.query.name}`);
        }
        else{
            res.send("welcome")
        }
    }

);

module.exports=route;