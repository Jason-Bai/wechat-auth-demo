const AuthRouter = require('./auth')

module.exports = (app) => {
  // auth router
  app.use('/auth', AuthRouter)
}
