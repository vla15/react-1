import path from 'path'
import HtmlWebpackPlugin from "html-webpack-plugin";
import LiveReloadPlugin from "webpack-livereload-plugin";

const env = process.env.NODE_ENV

module.exports = {
  entry: {
    app: ["regenerator-runtime/runtime", "./client/src/app.js"]
  },
  output: {
    filename: "bundle.js",
    publicPath: '/',
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)?$/,
        include: path.join(__dirname, "client/src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["env", {modules: false}], "react"]
          }
        }
      },
      {
        test: /(\.css|.scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/src/index.html"
    }),
    new LiveReloadPlugin()
  ],
  mode: env || "development"
};