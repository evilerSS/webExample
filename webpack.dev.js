const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: "./dist"
  },
  plugins: [
    new webpack.NamedChunksPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
