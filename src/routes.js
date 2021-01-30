const { Router } = require('express')

const routes = new Router()

routes.get('/api/test', (req, res) => {
  return res.json({message: "Hello, world"})
})

module.exports = routes
