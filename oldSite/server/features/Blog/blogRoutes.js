"use strict";

const { postBlog, getBlog, editBlog, deleteBlog } = require("./blogCtrl.js");
module.exports = app => {
  app.post("/api/blogs", postBlog);
  app.get("/api/blogs", getBlog);
  app.get("/api/blogs/:id", getBlog);
  app.put("/api/blogs/:id", editBlog);
  app.delete("/api/blogs/:id", deleteBlog);
};
