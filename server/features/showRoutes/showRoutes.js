const request = require("request")
module.exports = app => {
  app.get("/api/shows", function(req, res ){
    request('http://api.bandsintown.com/artists/Dog%20Company/events?format=json&api_version=2.0&app_id=dogcompanywebsite&date=all', function (error, response, body) {
    if (error) {
      res.json(error)
    }
    else {
      res.send(body)
    }
  })
})

}
