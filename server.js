const express = require('express')

const app = express()

const ejs = require('ejs')

const path = require('path')

const expressLayout = require('express-ejs-layouts')
const { CallTracker } = require('assert')

const PORT = process.env.PORT || 3000

//Assets
app.use(express.static('public'))




// set template engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/cart',(req,res)=>{
    res.render('coustomers/cart.ejs')
})


app.listen(PORT, () =>{
    console.log(`listning on port ${PORT}`);
})


