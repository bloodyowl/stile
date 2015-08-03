import path from "path"
import webpack from "webpack"
import { version as __VERSION__ } from "./package.json"

const config = {

  colors : true,
  progress : true,

  entry : {
    index : [
      "./modules/index",
    ],
    test: [
      "./webpack.test",
    ],
    example01: [
      "./examples/01",
    ],
    example02: [
      "./examples/02",
    ],
  },

  output : {
    path : path.resolve(__dirname, "dist"),
    library : "stile",
    libraryTarget : "umd",
    filename : "[name].js",
  },

  resolve : {
    extensions : [
      "",
      ".js",
    ],
  },

  plugins : [
    new webpack.DefinePlugin({
      __VERSION__ : `"${__VERSION__}"`,
    })
  ],

  module : {
    loaders : [
      {
        test : /\.js$/,
        loaders : [
          "babel?stage=0",
        ],
        exclude : /node_modules/,
      },
      {
        test : /\.html$/,
        loaders : [
          "file?name=[path][name].[ext]&context=./examples",
        ],
      },
    ],
  },

  node: {
    "fs": "empty",
  },

}

module.exports = config
