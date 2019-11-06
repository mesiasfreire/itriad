module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'default',
  password: 'secret',
  database: 'parking',
  operatiorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
