const { Pool } = require("pg");

const pool = new Pool({
  host: "postgres",
  user: "root",
  password: "root",
  database: "application",
  port: 5432,
});

module.exports = { pool };
