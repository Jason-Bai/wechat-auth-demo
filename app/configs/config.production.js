const config = require('./base')

// service api setup
config.service.name = 'Wechat Auth API'
config.service.port = 3000

// oauth setup
config.oauth.appid = '';
config.oauth.secret = '';

module.exports = config;
