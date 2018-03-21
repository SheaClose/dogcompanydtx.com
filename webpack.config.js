module.exports = {
  entry: "./src/app.js",
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js"]
  },
  output: {
    path: __dirname + "/public",
    filename: "app.min.js"
  }
};
