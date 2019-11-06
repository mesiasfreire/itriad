const express = require('express')

const routes = express.Router()

const VeiculoController = require('./app/controllers/VeiculoController')

routes.post('/veiculos', VeiculoController.store)
routes.get('/veiculos', VeiculoController.index)

module.exports = routes
