module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      placa: {
        allowNull: false,
        type: Sequelize.STRING
      },
      modelo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('veiculos')
  }
}
