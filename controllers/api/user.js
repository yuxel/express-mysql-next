const UserModel = require('../../models/users');

module.exports = {
  login: async (req, res, next) => {
    try {
      const result = await UserModel.login(req.body.data.username, req.body.data.password);

      if (!result) {
        throw Error('user not found');
      }

      req.session.user = result;
      res.send(result);
    } catch (e) {
      res.status(401);
      res.send({ errorMessage: 'Kullanıcı adı ve parola yanlış' });
    }
  },

  logout: async (req, res, next) => {
    delete req.session.user;
    res.send(true);
  }

};
