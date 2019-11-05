/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')

const CarroSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true,
    unique: true
  },
  modelo: {
    type: String,
    required: true
  },
  cor: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.export = mongoose.model('Carro', CarroSchema)
