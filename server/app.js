const express = require('express')
const app = express()

app.use(express.json())

app.use('/api', require('./api'))

app.get('/', (req, res) => {
  res.send('Server is running!')
})


module.exports = app