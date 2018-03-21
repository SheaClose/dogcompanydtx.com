const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  plugins: [
    new MinifyPlugin(),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
  ],
  entry: "./src/app.js",
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ],
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
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
