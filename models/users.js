const db = require('../lib/db.js');

module.exports = {
  getUserCount: async () => {
    const rows = await db.query('select * from users');
    return rows.length;
  },

  login: async (username, password) => {
    const rows = await db.query('select * from users where username=? and password= ?', [username, password]);
    return rows[0];
  }
};
