'use strict';

module.exports = {
  async deleteUser(req, res) {
    await req.app.get('db').cart.destroy({ session_id: req.sessionID });
    res.status(200).send('');
  }
};
