module.exports = (sequelize, DataTypes) => {
  const Movimentacao = sequelize.define(
    'Movimentacao',
    {
      entrada: DataTypes.STRING,
      saida: DataTypes.STRING,
      valor: DataTypes.DECIMAL(10, 2)
    },
    {
      freezeTableName: true,
      tableName: 'movimentacoes'
    }
  )
  Movimentacao.associate = function (models) {
    Movimentacao.belongsTo(models.Veiculo, {
      foreignKey: 'id',
      as: 'veiculo'
    })
  }
  return Movimentacao
}
