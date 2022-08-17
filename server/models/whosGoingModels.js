const { Pool } = require('pg');

const PG_URI = 'postgres://lfjjjrcl:sRvXwFW0nG7R5Eip_HCrVRit4l3WK_72@ruby.db.elephantsql.com/lfjjjrcl';

const pool = new Pool({
  connectionString: PG_URI
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query, ', text);
    return pool.query(text, params, callback);
  }
}