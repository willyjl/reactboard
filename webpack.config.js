const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/index.tsx')
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      querystring: false
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    // proxy: {
    //   '/gql': 'http://localhost:3001'
    // },
    static: [
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
        watch: true
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: path.join(__dirname, 'public/index.html')
  })],
};