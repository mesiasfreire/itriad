const { Veiculo, Movimentacao } = require('../models')
const moment = require('moment')

class VeiculoController {
  async store (req, res) {
    const entrada = moment().format('HH:mm')
    const { placa, modelo, cor } = req.body
    await Veiculo.findOrCreate({ where: { placa, modelo, cor } }).then(
      ([veiculo, created]) => {
        if (!created) {
          Movimentacao.findOne({ where: { veiculo_id: veiculo.id, saida: null } }).then(result => {
            if (result) {
              return res.status(400).json({ success: false, message: `Não foi possivel registrar a entrada do veículo com a placa:${veiculo.placa},poís não possui registro de saída.` })
            }
            Movimentacao.create({ entrada, veiculo_id: veiculo.id })
            return res.status(200).json(veiculo)
          })
        }
      }
    )
  }

  async update (req, res) {
    const { placa } = req.params
    console.log(req.params.placa)
   // const saida = moment().format('HH:mm')
    const carro = await Veiculo.findOne({ where: { placa } }).then(veiculo => {
      Movimentacao.findOne({
        limit: 1,
        where: { veiculo_id: veiculo.id },
        order: [['created_at', 'DESC']]
      }).then(moviment => {
        console.log(moviment)
      })
      // Movimentacao.update(
      //   { saida, valor: 10.9 },
      //   { where: { veiculo_id: veiculo.id } }
      // )
    })
    return res.status(200).json(carro)
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
