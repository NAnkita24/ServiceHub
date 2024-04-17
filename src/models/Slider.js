const mongoose=require('mongoose');
const Slider=mongoose.Schema({
    title:String,
    subtitle:String,
    Imageurl:String,
    class:String
})

module.exports=mongoose.model('slider',Slider)