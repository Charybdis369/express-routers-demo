const app = require('../app')
const client = require('./client')



async function getAllFoods() {
    const {rows} = await client.query(`
    SELECT * FROM foods;`)

    console.log(rows)

    return rows
}

async function addNewFood() {
    const {name, caloies} = food

    const {rows} = await client.query(`
    INSERT INTO foods(name, calories)
    VALUES ($1. $2) RETURNING *;
    `, [name, calories])
}

module.exports = {addNewFood, getAllFoods}