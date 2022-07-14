const express = require('express')
const productos = require('./modulos/productos')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api/productos', productos)
app.listen(8080, () => {
    console.log('Servidor OK puerto 8080')
})