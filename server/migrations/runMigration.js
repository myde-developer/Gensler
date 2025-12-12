const fs = require('fs')
const path = require('path')
const db = require('../db')

async function run() {
  try {
    const sql = fs.readFileSync(path.join(__dirname, 'create_users.sql'), 'utf8')
    await db.query(sql)
    console.log('Migration ran successfully')
    process.exit(0)
  } catch (err) {
    console.error('Migration failed', err)
    process.exit(1)
  }
}

run()
