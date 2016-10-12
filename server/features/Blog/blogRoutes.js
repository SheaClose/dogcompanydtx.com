const blogCtrl = require("./blogCtrl.js")
module.exports = app => {
  app.post("/api/blogs", blogCtrl.postBlog);
  app.get("/api/blogs", blogCtrl.getBlog);
  app.get("/api/blogs/:id", blogCtrl.getBlog);
  app.put("/api/blogs/:id", blogCtrl.editBlog);
  app.delete("/api/blogs/:id", blogCtrl.deleteBlog);

}
