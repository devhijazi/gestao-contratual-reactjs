const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv").config();
const envObject = {};

Object.entries(dotenv.parsed).forEach(([k, v]) => {
  envObject[k] = JSON.stringify(v);
});

module.exports = {
  entry: {
    path: path.resolve(__dirname, "src", "index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),
    new webpack.DefinePlugin({
      "process.env": envObject
    })
  ]
};
