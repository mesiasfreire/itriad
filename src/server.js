const express = require('express')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
  }

  database () {}

  middlewares () {
    this.express.use(express.json())
   // this.express.use(express.urlencoded({ extended: true }))
  }

  routes () {
    this.express.use(require('./routes'))
  }
}
module.exports = new App().express
