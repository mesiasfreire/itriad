const { Veiculo, Movimentacao } = require('../models')
const moment = require('moment')

class VeiculoController {
  async store (req, res) {
    const { placa, modelo, cor } = req.body
    await Veiculo.findOrCreate({ where: { placa, modelo, cor } }).then(
      veiculo => {
        if (veiculo) {
          return res.status(200).json(veiculo)
        } else {
          return res.status(201).json(veiculo)
        }
      }
    )
  }

  async update (req, res) {
    const { placa } = req.params
    const saida = moment().format('HH:mm')
    await Veiculo.findOne({ where: { placa } }).then(async veiculo => {
      await Movimentacao.update(
        { saida, valor: 10.9 },
        { where: { veiculo_id: veiculo.id } }
      )
      return res.status(200).json('Atualizado com sucesso')
    })
  }

  async storeAssoc (req, res) {
    const entrada = moment().format('HH:mm')
    await Veiculo.create(req.body).then(veiculo => {
      Movimentacao.create({ entrada, veiculo_id: veiculo.id })
    })
    return res.status(201).json({ message: 'Veiculo cadastrado com sucesso' })
  }

  async index (req, res) {
    const parking = await Veiculo.findAll({
      include: [
        {
          model: Movimentacao,
          as: 'movimentacoes'
        }
      ]
    })
    return res.json(parking)
  }

  async find (req, res) {
    await Veiculo.findOne({
      where: { placa: req.params.placa },
      include: [
        {
          model: Movimentacao,
          as: 'movimentacoes'
        }
      ]
    }).then(veiculo => {
      return res.json(veiculo)
    })
  }
}

module.exports = new VeiculoController()
