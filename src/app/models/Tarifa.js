module.exports = (sequelize, DataTypes) => {
  const Tarifa = sequelize.define(
    'Tarifa',
    {
      valor: DataTypes.DECIMAL,
      hinicio: DataTypes.TIME,
      hfim: DataTypes.TIME,
      periodoIni: DataTypes.INTEGER,
      pfinal: DataTypes.INTEGER
    },
    {
      freezeTableName: true,
      tableName: 'tarifas'
    }
  )
  return Tarifa
}
