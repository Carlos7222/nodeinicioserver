const express = require('express')
const app = express()
const hbs=require('hbs')
 
require('./hbs/helpers')

const port=process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'))
//express hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/parciales')


app.get('/', (req, res) => {
 
    res.render('home',{
        nombre: 'carlos',
    })
})
app.get('/about', (req, res) => {
 
    res.render('about' )
})
app.listen(port)