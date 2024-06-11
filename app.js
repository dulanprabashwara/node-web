const express = require("express");
const app = express();//express application 
const controller= require('./controller');
const cors = require('cors');
app.get('/users',(req,res)=>{
    controller.getusers((req,res,next)=>{
        res.send();
    })
})
app.post('./createuser', (req,res)=>{
    controller.adduser (req,res,(callback)=>{
        res.send();
    })
})
app.post('./deleteuser',(req,res)=>{
    controller.deleteuser(req.body,(callback)=>{
        res.send(callback)
    })
})
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())



module.exports =app;