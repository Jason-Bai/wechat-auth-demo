module.exports = {
  service: {
    host: '127.0.0.1',
    port: 3000,
    name: 'Wechat-Auth-API'
  },
  mongodb: {
    host: '127.0.0.1',
    port: 27017,
    name: 'wechat',
    user: '',
    pass: '',
    options: {
      useMongoClient: true
    }
  },
  oauth: {
    appid: '',
    secret: ''
  }
}
