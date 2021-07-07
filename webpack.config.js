/* eslint-disable linebreak-style */
module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.(jpeg|png|jpg|svg|gif)$/i,
      loader: 'file-loader',
      options: {
        name: '[name].[contenthash].[ext]',
        outputPath: 'images',
        publicPath: 'images',
        emitFile: true,
        esModule: false,
      },
    }],
  },
};
