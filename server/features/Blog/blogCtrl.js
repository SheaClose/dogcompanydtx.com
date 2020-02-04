'use strict';

module.exports = {
  getBlog: (req, res) => {
    const db = req.app.get('db');
    if (req.params.id) {
      db.blogs.find({ id: req.params.id }).then(blogs => {
        return res.json(blogs);
      });
    } else {
      db.blogs.find().then(blogs => {
        return res.json(blogs);
      });
    }
  }
};
