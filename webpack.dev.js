const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    hotOnly: true,
    contentBase: path.join(__dirname, "dist"),
    host: "localhost",
    port: 9000,
    open: false,
    compress: true,
    publicPath: "/",
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.NamedChunksPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});