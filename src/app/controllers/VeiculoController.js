const { Veiculo, Movimentacao } = require('../models')

class VeiculoController {
  async store (req, res) {
    const { placa, modelo, cor } = req.body
    await Veiculo.findOrCreate({ where: { placa, modelo, cor } })
      .then(veiculo => {
        if (veiculo) {
          return res.status(200).json(veiculo)
        } else {
          return res.status(201).json(veiculo)
        }
      })
  }

  async index (req, res) {
    const parking = await Veiculo.findAll({
      include: [{
        model: Movimentacao,
        as: 'movimentacoes'
      }]
    })
    return res.json(parking)
  }

  async find (req, res) {
    await Veiculo.findOne({ where: { placa: req.params.placa } })
      .then(veiculo => {
        return res.json(veiculo)
      })
  }
}

module.exports = new VeiculoController()
