const path = require('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');

module.exports = {

  // where our app will begin
  // dependency graph
  mode: process.env.NODE_ENV,
  entry: './client/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html'
    }),

  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000/',
    //     router: () => 'http://localhost:8080',
    //   },
    // },
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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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