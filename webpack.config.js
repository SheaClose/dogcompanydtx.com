var path = require("path"),
  webpack = require("webpack"),
  libPath = path.join(__dirname, "client"),
  wwwPath = path.join(__dirname, "dist"),
  CompressionPlugin = require("compression-webpack-plugin");

const isDev = process.env.NODE_ENV !== "production";

if (isDev) {
  module.exports = {
    entry: path.join(libPath, "/app/app.module.js"),
    output: {
      path: path.join(wwwPath),
      filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: "raw"
        },
        {
          test: /\.(png|jpg)$/,
          loader: "file?name=img/[name].[ext]" 
        },
        {
          test: /\.scss$/,
          loader: "style!css!sass"
        },
        {
          test: /\.css$/,
          loader: "style!css"
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: "ng-annotate?add=true!babel"
        },
        {
          test: [
            /fontawesome-webfont\.svg/,
            /fontawesome-webfont\.eot/,
            /fontawesome-webfont\.ttf/,
            /fontawesome-webfont\.woff/,
            /fontawesome-webfont\.woff2/
          ],
          loader: "file?name=fonts/[name].[ext]"
        },
        { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: "url" }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({}),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin()
    ]
  };
} else {
  module.exports = {
    entry: path.join(libPath, "/app/app.module.js"),
    context: path.resolve(__dirname, "./client"),
    output: {
      filename: "bundle.[hash].js",
      hashDigestLength: 7,
      path: path.join(wwwPath),
      publicPath: "/"
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: "raw"
        },
        {
          test: /\.(png|jpg)$/,
          loader: "file?name=img/[name].[ext]"
        },
        {
          test: /\.scss$/,
          loader: "style!css!sass"
        },
        {
          test: /\.css$/,
          loader: "style!css"
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: "ng-annotate?add=true!babel"
        },
        {
          test: [
            /fontawesome-webfont\.svg/,
            /fontawesome-webfont\.eot/,
            /fontawesome-webfont\.ttf/,
            /fontawesome-webfont\.woff/,
            /fontawesome-webfont\.woff2/
          ],
          loader: "file?name=fonts/[name].[ext]"
        },
        { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: "url" }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
      }),

      new webpack.ProvidePlugin({
        "window.Masonry": "Masonry"
      }),

      new webpack.optimize.CommonsChunkPlugin("common.js"),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin()
    ]
  };
}
