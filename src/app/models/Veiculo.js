module.exports = (sequelize, DataTypes) => {
  const Veiculo = sequelize.define('Veiculo', {
    placa: DataTypes.STRING,
    modelo: DataTypes.STRING,
    cor: DataTypes.STRING
  })
  return Veiculo
}
