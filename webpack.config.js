const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  title: 'Development Server',
  // fixed which template file is served
  template: 'index.html'
})

module.exports = {
  mode: process.env.NODE_ENV,
  entry: { 
    src: './client/index.js' 
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // alex commented these out since he added in .babelrc
          // options: {
          //   presets: [
          //     ['@babel/preset-env', '@babel/preset-react']
          //   ]
          // }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        // made a quick edit to the scss loader.. added sass-loader to use array
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
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
  // added a static object in dev server. this basically tells dev server what to statically serve when loading up
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.join(__dirname, 'build')
    },
    // made an edit to proxy endpoint
    proxy: {
      '/api': 'localhost:3000'
    }
  }
}