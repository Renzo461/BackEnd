/* eslint-disable eqeqeq */
const express = require('express')
const { Router } = express
const router = Router()

const productos = [
  {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
    id: 1
  },
  {
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    id: 2
  },
  {
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
    id: 3
  }
]

router.get('/', (req, res) => {
  // res.render('articulo', { productos }) //pug
  res.render('articulo', { prod: productos }) // hbs
  // res.render('ejs/layouts/main', { prod: productos }) // ejs
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    res.status(400).send({ error: 'El parámetro no es un número' })
    return
  }
  const p = productos.find((e) => e.id == id)
  if (p === undefined) {
    res.status(404).send({ error: 'producto no encontrado' })
    return
  }
  res.send(p)
})
router.post('/', (req, res) => {
  const productoAGuardar = {
    ...req.body,
    id: productos.length + 1
  }
  productos.push(productoAGuardar)
  res.redirect('../index.html')
})

router.put('/:id', (req, res) => {
  const productoAActualizar = req.body
  const { id } = req.params
  if (isNaN(id)) {
    res.status(400).send({ error: 'El parámetro no es un número' })
    return
  }
  const p = productos.find((e) => e.id == id)
  if (p == undefined) {
    res.status(404).send({ error: 'producto no encontrado' })
    return
  }
  const index = productos.indexOf(p)
  productos[index] = productoAActualizar
  res.send({ statusPut: 'ok' })
})
router.delete('/:id', (req, res) => {
  const { id } = req.params
  if (isNaN(id)) {
    res.status(400).send({ error: 'El parámetro no es un número' })
    return
  }
  const p = productos.find((e) => e.id == id)
  if (p == undefined) {
    res.status(404).send({ error: 'producto no encontrado' })
    return
  }
  const index = productos.indexOf(p)
  productos.splice(index, 1)
  res.send({ statusDelete: 'ok' })
})

module.exports = router
