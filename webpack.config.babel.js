import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/index.js',
  devtool: 'cheap-source-map ',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  plugins: [new CopyWebpackPlugin([{ from: './public' }])],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
