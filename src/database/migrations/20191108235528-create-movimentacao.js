module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movimentacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entrada: {
        allowNull: false,
        type: Sequelize.TIME
      },
      saida: {
        allowNull: true,
        type: Sequelize.TIME
      },
      valor: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      veiculo_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'veiculos',
          key: 'id'
        }
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
    return queryInterface.dropTable('movimentacoes')
  }
}
