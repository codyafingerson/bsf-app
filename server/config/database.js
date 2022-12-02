const mysql = require('mysql');

/**
 * Connect to the database using defined environment variables
 */
const database= mysql.createPool({
    host: 'localhost',
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DATABASE,
    port: process.env.DBPORT
});

module.exports = database;