const { Movimentacao } = require('../models')

class MovimentacaoController {
  async store (req, res) {
    const parking = await Movimentacao.create(req.body)
    return res.json(parking)
  }

  async index (req, res) {
    const parking = await Movimentacao.findAll()
    return res.json(parking)
  }

  async find (req, res) {
    await Movimentacao.findOne({ where: { placa: req.param.placa } })
      .then(veiculo => {
        return res.json(veiculo)
      })
  }
}

module.exports = new MovimentacaoController()
