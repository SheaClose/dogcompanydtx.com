const Blog = require("./Blog.js")

module.exports = {
  postBlog: (req, res) => {
    new Blog(req.body).save((err, suc) => {
      if (err){return res.status(500).json(err)}
      else {
        return res.status(200).json(suc)
      }
    })
  }
  , getBlog: (req, res) => {
    if (req.params.id){
      Blog.findById({_id: req.params.id}, (err, suc) => {
        if (err){return res.status(500).json(err)}
        else {
          res.status(200).json(suc)
        }
      })
    }
    else {
      Blog.find({}, (err, suc) => {
        if (err){return res.status(500).json(err)}
        else {
          res.status(200).json(suc)
        }
      })
    }
  }
  , editBlog: (req, res) => {
    Blog.findByIdAndUpdate({_id: req.params.id}, req.body, (err, suc) => {
      if (err){return res.status(500).json(err)}
      else {
        res.status(200).json(suc)
      }
    })
  }
  , deleteBlog: (req, res) => {
    Blog.findByIdAndRemove({_id: req.params.id}, (err, suc) => {
      if (err){return res.status(500).json(err)}
      else {
        res.status(200).json(suc)
      }
    })
  }
}
