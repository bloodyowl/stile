import WebpackDevServer from "webpack-dev-server"
import webpack from "webpack"
import config from "../webpack.config"
import opn from "opn"
import path from "path"

const __PROD__ = process.argv.includes("--production")

new WebpackDevServer(
  webpack(config),
  {
    publicPath: path.resolve(__dirname, "../dist"),
    // find what you can enable/disable here
    // https://github.com/webpack/webpack/blob/master/lib/Stats.js
    stats: {
      colors: true,
      // hide all chunk dependencies because it's unreadable
      chunkModules: false,
    },
    noInfo: true,
  }
)
  .listen(8080, "localhost", (err) => {
    if (err) {
      console.log(err);
    }
    opn(`http://localhost:8080`)
  })
