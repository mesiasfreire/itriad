const express = require('express')

const routes = express.Router()

const CarroController = require('./app/controllers/CarroController')

routes.post('/carros', CarroController.store)

module.exports = routes
