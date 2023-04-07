const mysql = require('mysql2/promise');
const config = require('../config/db.js');

let connection;

module.exports = {
  query: async (sql, params) => {
    if (!connection) {
      connection = await mysql.createConnection(config);
    }
    const [results] = await connection.execute(sql, params);
    return results;
  }
};
