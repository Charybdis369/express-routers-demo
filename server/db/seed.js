const client = require('./client')
const chalk = require('chalk')

async function dropTables() {
await client.query(`
DROP TABLE IF EXISTS foods;
`)
}
async function createTables() {

   await client.query(`
   CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name TEXT,
    calories INTEGER
   );
   `)

}

async function addFood() {
  client.query(`
  INSERT INTO foods(name, calories)
  VALUES ('pizza', 999);
  `)
  await client.query(`
  INSERT INTO foods(name, calories)
  VALUES ('taco', 333)
  `)
}

async function seed() {
  try {
    client.connect()
    await dropTables()
    console.log(chalk.red('Dropping tables. . .'))
    await createTables()
    console.log(chalk.yellow('created tables. . .'))
    await addFood()
    console.log(chalk.green('added added food. . .'))

  } catch(err) {
    console.error(err)
  } finally {
    client.end() // closes the connection
  }
}

seed()