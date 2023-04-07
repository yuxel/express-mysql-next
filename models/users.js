const db = require('../lib/db.js');

module.exports = {
  getUserCount: async () => {
    const rows = await db.query('select * from users');
    return rows.length;
  }
};
