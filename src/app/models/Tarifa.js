module.exports = (sequelize, DataTypes) => {
  const Tarifa = sequelize.define('Tarifa', {
    valor: DataTypes.DECIMAL,
    inicio: DataTypes.TIME,
    fim: DataTypes.TIME
  },
  {
    freezeTableName: true,
    tableName: 'tarifas'
  })
  return Tarifa
}
