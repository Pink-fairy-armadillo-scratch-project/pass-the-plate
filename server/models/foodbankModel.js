const { Pool } = require('pg');

const PG_URI = 'postgres://qqzepwml:XP-pIXvv6lhGebx5PizwpjRYInDqbRmI@bubble.db.elephantsql.com/qqzepwml';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
