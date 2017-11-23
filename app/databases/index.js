const mongoose = require('mongoose')
const config = require('../config')

mongoose.Promise = global.Promise

module.exports = () => {
  const { mongodb } = config

  const { host, port, name, user, pass, options } = mongodb

  const uri = `mongodb://${user}:${pass}@${host}:${port}/${name}`

  mongoose.connect(uri, options)

  return mongoose
}
