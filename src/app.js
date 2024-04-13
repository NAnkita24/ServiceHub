const express=require('express')
const app=express()
const hbs=require('hbs')
const mongoose=require('mongoose')
const routes=require('./routes/main')

//static and route
app.use('/static',express.static('public'))
app.use('',routes)

//view engine
app.set('view engine','hbs')
app.set('views','views')
hbs.registerPartials('views/partials')

//db connection
mongoose.connect('mongodb://127.0.0.1:27017/servicehub')

app.listen(5000)
