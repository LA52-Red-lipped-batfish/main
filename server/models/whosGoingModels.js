const { Pool } = require('pg');

const PG_URI = 'postgres://ytyrwxje:zoeRkcNBHw2Q4WYZgNFmZzLIntOMgSTz@heffalump.db.elephantsql.com/ytyrwxje';

const pool = new Pool({
  connectionString: PG_URI
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query, ', text);
    return pool.query(text, params, callback);
  }
}