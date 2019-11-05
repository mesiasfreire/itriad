const Carro = require('../models/Carro')

class CarroController {
  async store (req, res) {
    const { placa } = req.body
    try {
      if (await Carro.findOne({ placa }).exec()) {
        return res.status(400).json({ error: 'O Carro ja foi cadastrado' })
      }
      const carro = await Carro.create(req.body)

      return res.json(carro)
    } catch (error) {
      console.log(error)
    }
  }
}
module.exports = new CarroController()
