const express=require('express')
const {route}=require('express/lib/application')
const routes=express.Router()
const Detail=require('../models/Detail')


routes.get('/',async (req,resp)=>{
    const details = await Detail.findOne({'_id':"661b7d04de8ef4d4d74d01a4"})
    resp.render("index",{
        details : details
    })
})

routes.get('/gallery',(req,resp)=>{
    resp.render("gallery")
})


module.exports=routes