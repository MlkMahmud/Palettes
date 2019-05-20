const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnv = require('dotenv-webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/bundle.js',
    publicPath: '/',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/images',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './public/index.html',
      template: path.join(__dirname, 'index.html'),
    }),

    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
      chunkFilename: '[id].css',
    }),
    new DotEnv({
      path: './.env',
    }),
  ],
};
