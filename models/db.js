var mysql = require('mysql');
var dotenv = require('dotenv');  // Load our environment variables ..
dotenv.load();

const pool = mysql.createPool({
   connectionLimit: process.env.DB_CONNECTION_LIMIT,
   host: process.env.HOST,
   port : process.env.DBPORT,
   user: process.env.DB_USER,
   database: process.env.DB_NAME,
});

module.exports = pool;