const express = require('express')
const app = require('../app')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('you are in the api routes')
})

router.get('/extra', (req, res) => {
    res.send('you are in the extra api route')
})

router.use('/foods', require('./foods'))

module.exports = router