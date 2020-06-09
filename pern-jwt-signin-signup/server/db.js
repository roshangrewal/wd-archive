const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "password",
  port: 5432,
  database: "authtodo"
});

module.exports = pool;
