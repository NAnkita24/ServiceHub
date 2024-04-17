const express=require('express')
const {route}=require('express/lib/application')
const routes=express.Router()
const Detail=require('../models/Detail')
const Slider=require('../models/Slider')
const Service=require('../models/Service')
const Contact = require('../models/Contact')



routes.get('/',async (req,resp)=>{
    const details = await Detail.findOne({'_id':"661b7d04de8ef4d4d74d01a4"})
    const Slides=await Slider.find()
    const service=await Service.find()
    resp.render("index",{
        details : details,
        Slides : Slides,
        service:service
    })
})

routes.get('/gallery',(req,resp)=>{
    resp.render("gallery")
})

routes.post("/process-form",async(req,resp)=>{
    console.log("form Submitted");
    console.log(req.body);

    try{
        const data=await Contact.create(req.body)
        console.log(data);
        resp.redirect("/")
    }

    catch(e){
    console.log(e);
    resp.redirect("/error")
    }
})

module.exports=routes