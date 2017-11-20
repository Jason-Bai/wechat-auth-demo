const express = require('express')
const Router = express.Router()

Router.get('/', (req, res, next) => {
  const { code } = req.query
  res.send(code)
})

module.exports = Router;
