const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  filename: 'webpack.html',
  template: './client/index.html'
})

module.exports = {
  mode: process.env.NODE_ENV,
  entry: { 
    src: './client/index.js' 
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', '@babel/preset-react']
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require.resolve("sass"),
            }
          }
        ]
      }
    ]
  },
  plugins: [
    htmlPlugin
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    proxy: {
      '/': 'localhost:3000'
    }
  }
}