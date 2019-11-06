const express = require('express')

const routes = express.Router()

/*
*Registro Rotas de veículos
*/
const VeiculoController = require('./app/controllers/VeiculoController')
routes.post('/veiculo', VeiculoController.store)
routes.get('/veiculos', VeiculoController.index)
routes.get('/veiculo/:placa', VeiculoController.find)

module.exports = routes
