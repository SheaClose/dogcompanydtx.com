'use strict';

const { getBlog } = require('./blogCtrl.js');
module.exports = app => {
  app.get('/api/blogs', getBlog);
  app.get('/api/blogs/:id', getBlog);
};
