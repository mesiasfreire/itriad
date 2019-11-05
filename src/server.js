const express = require('express')
const mongose = require('mongoose')
const databaseConf = require('./config/database')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
  }

  database () {
    mongose.connect(databaseConf.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }

  routes () {
    this.express.use(require('./routes'))
  }
}
module.exports = new App().express
