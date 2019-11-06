'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tarifas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      hinicio: {
        allowNull: false,
        type: Sequelize.TIME
      },
      hfim: {
        allowNull: false,
        type: Sequelize.TIME
      },
      periodoIni: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      peridofim: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tarifas')
  }
}
