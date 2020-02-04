'use strict';
const axios = require('axios');

module.exports = app => {
  app.get('/api/shows', function(req, res) {
    axios
      .get(
        'https://rest.bandsintown.com/artists/dog%20company/events?format=json&api_version=2.0&app_id=dogcompanywebsite&date=all'
      )
      .then(res => {
        console.info('res: ', res);
        res.status(200).json(res);
      })
      .catch(err => {
        console.info('error getting shows');
        res.status(200);
      });
  });
};
