const path = require('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env');
})
module.exports = {

  // where our app will begin
  // dependency graph
  mode: process.env.NODE_ENV,
  entry: './client/src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './client/src/index.html'
    }),
    new webpack.DefinePlugin( {
      'process.env': DeviceMotionEvent.parsed
    })
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/assets/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  }, 

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}