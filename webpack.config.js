const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true, // Important, HTML reload on change
    hot: true,
    host: '192.168.0.236', //your ip address
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?url=false', // This will solve the issue with loading background image url in CSS
          'sass-loader',
        ],
      },
    ],
  },
};
