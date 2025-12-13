const fs = require('fs');
const path = require('path');
const db = require('../db');

async function run() {
  try {
    console.log('Running database migration...');
    
    const sql = fs.readFileSync(
      path.join(__dirname, 'create_users.sql'), 
      'utf8'
    );
    
    await db.query(sql);
    console.log(' Migration completed successfully');
    
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

run();