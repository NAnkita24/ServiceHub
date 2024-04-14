const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const Detail = require('./models/Detail')
const app = express()

//static and route
app.use('/static', express.static('public'))
app.use('', routes)

//view engine
app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials('views/partials')

//db connection
mongoose.connect('mongodb://127.0.0.1:27017/servicehub')
// Detail.create({
//     brandName: "serviceHub",
//     brandUrl: 'static/images/logo.png',
//     links : [
//         {
//             label: 'Home',
//             url: '/'
//         },
//         {
//             label: 'Service',
//             url: '/services'
//         },
//         {
//             label: 'Gallery',
//             url: '/gallery'
//         },
//         {
//             label: 'About Us',
//             url: '/about'
//         },
//         {
//             label: 'Contact Us',
//             url: '/contact'
//         }
        
//     ]
// })
app.listen(5000)
