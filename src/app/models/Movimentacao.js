module.exports = (sequelize, DataTypes) => {
  const Movimentacao = sequelize.define('Movimentacao', {
    entrada: DataTypes.STRING,
    saida: DataTypes.STRING,
    valor: DataTypes.DECIMAL
  },
  {
    freezeTableName: true,
    tableName: 'movimentacoes'
  })

  return Movimentacao
}
