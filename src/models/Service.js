const mongoose= require('mongoose')

const service = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    textlink:String,
    link:String
})

module.exports=mongoose.model("services",service)