require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' )

// Contenido estatico
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
    name: 'Edwin Hernández',
    email: 'edwinhernandez.br@gmail.com',
    title: 'Mi web con express'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic', {
    name: 'Edwin Hernández',
    email: 'edwinhernandez.br@gmail.com',
    title: 'Mi web con express'
  })
})

app.get('/elements', function (req, res) {
  res.render('elements', {
    name: 'Edwin Hernández',
    email: 'edwinhernandez.br@gmail.com',
    title: 'Mi web con express'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})