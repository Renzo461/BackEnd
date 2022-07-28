const express = require('express')
const productos = require('./modulos/productos')
const app = express()

// // ejs
// app.set('view engine', 'ejs')

// //pug
// app.set('view engine', 'pug')
// app.set('views', './views/pug')

// hbs
const handlebars = require('express-handlebars')
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultlayout: 'main.hbs',
  // eslint-disable-next-line n/no-path-concat
  layoutsDir: __dirname + '/views/hbs/layouts',
  // eslint-disable-next-line n/no-path-concat
  partialsDir: __dirname + '/views/hbs/partials'
}))
app.set('view engine', 'hbs')
app.set('views', './views/hbs')

// SERVER
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api/productos', productos)
app.listen(8080, () => {
  console.log('Servidor OK puerto 8080')
})
