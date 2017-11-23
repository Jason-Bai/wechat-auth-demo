const express = require('express')
const AuthCtl = require('../controllers/auth')

const Router = express.Router()

Router.get('/', async (req, res, next) => {
  const { code } = req.query
  const user = await AuthCtl.user(code)
  res.send(user)
})

module.exports = Router;