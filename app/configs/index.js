const configs = require(`./config.${process.env.NODE_ENV || 'development'}`)

module.exports = configs
