const express = require('express')
const { getAllFoods, addNewFood } = require('../db/foods')

const router = express.Router()

router.get('/', async(req, res) => {
    try {
        let allFoods = await getAllFoods()
        res.send(allFoods)
    } catch(err) {
        console.error(err)
    }
})

router.post('/', (req, res) => {

})

router.get('/:name', (req, res) => {

})

router.delete('/:id', (req, res) => {
    
})

module.exports = router