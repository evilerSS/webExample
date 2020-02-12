const path = require("path");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: './static/img'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [require("autoprefixer")];
              }
            }
          },
          'sass-loader',
        ]
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ]
};