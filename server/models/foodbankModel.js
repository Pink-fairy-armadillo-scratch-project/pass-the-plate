const { Pool } = require('pg');
require('dotenv').config();

const PG_URI = process.env.DATABASE_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('connecting to dbs');
    return pool.query(text, params, callback);
  },
};


