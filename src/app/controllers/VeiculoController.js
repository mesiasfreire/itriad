const { Veiculo } = require('../models')

class VeiculoController {
  async store (req, res) {
    const veiculo = await Veiculo.create(req.body)
    return res.json(veiculo)
  }

  async index (req, res) {
    const veiculos = await Veiculo.findAll()
    return res.json(veiculos)
  }
}

module.exports = new VeiculoController()
