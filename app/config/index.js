const U = require('../utils')
const defaults = require('./default')
const config = require('./' + (process.env.NODE_ENV || 'development'))
module.exports = U._.merge({}, defaults, config)
