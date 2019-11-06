'use strict'
module.exports = (sequelize, DataTypes) => {
  const Veiculo = sequelize.define('Veiculo', {
    placa: DataTypes.STRING,
    modelo: DataTypes.STRING,
    cor: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'veiculos'
  })
  Veiculo.associate = function (models) {
    Veiculo.hasOne(models.Movimentacao, {
      foreignKey: 'veiculo_id',
      as: 'movimentacoes'
    })
  }
  return Veiculo
}
