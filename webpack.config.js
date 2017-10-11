const webpack = require('webpack');
module.exports = {
  // the entry point (index.js) of our application
  entry: [
    // first element is only necessary for webpack dev server
    'webpack-dev-server/client?http://localhost:8080',
    './public/src/app.js'
  ],
  module: {
    // informs webpack what to do with different file types
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  // determines what file types webpack should resolve
  resolve: {
    extensions: ['', '.js']
  },
  // output information of the production file
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  // Where to find index.html
  // Only necessary for webpack dev server
  devServer: {
    contentBase: './public'
  }
};
