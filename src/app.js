const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const Slider=require('./models/Slider')
const service=require('./models/Service')
const app = express()

//static and route
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static', express.static('public'))
app.use('', routes)


//view engine
app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials('views/partials')

//db connection
mongoose.connect('mongodb://127.0.0.1:27017/servicehub')

// Slider.create([
//     {
//         title:'service1',
//         subtitle:'java is most popular programming language',
//         Imageurl:'/static/images/slider1.jpg',
//         class:'active'
//     },
//     {
//         title:'service2',
//         subtitle:'java is most popular programming language',
//         Imageurl:'/static/images/slider2.jpg'
//     },
//     {
//         title:'service3',
//         subtitle:'java is most popular programming language',
//         Imageurl:'/static/images/slider3.jpg'
//     },
//     {
//         title:'service4',
//         subtitle:'java is most popular programming language',
//         Imageurl:'/static/images/slider4.jpg'
//     }
// ])




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

// service.create([
//     {
//         icon:'fa-solid fa-laptop-file',
//         title:'Provide best courses',
//         description:'We provide courses that helps our student',
//         textlink:'check',
//         link:'#'
//     },
//     {
//         icon:'fa-solid fa-laptop-file',
//         title:'Provide best courses',
//         description:'We provide courses that helps our student',
//         textlink:'check',
//         link:'#'
//     },
//     {
//         icon:'fa-solid fa-laptop-file',
//         title:'Provide best courses',
//         description:'We provide courses that helps our student',
//         textlink:'check',
//         link:'#'
//     },
//     {
//         icon:'fa-solid fa-laptop-file',
//         title:'Provide best courses',
//         description:'We provide courses that helps our student',
//         textlink:'check',
//         link:'#'
//     },
//     {
//         icon:'fa-solid fa-laptop-file',
//         title:'Provide best courses',
//         description:'We provide courses that helps our student',
//         textlink:'check',
//         link:'#'
//     },
//     {
//         icon:'fa-solid fa-laptop-file',
//         title:'Provide best courses',
//         description:'We provide courses that helps our student',
//         textlink:'check',
//         link:'#'
//     }
// ])

app.listen(5000, () => {
    console.log('Server Started');
})
