import webpack from "webpack"
import config from "../webpack.config"

const __PROD__ = process.argv.includes("--production")

webpack({
  ...config,
  plugins: [
    ...config.plugins,
    ...__PROD__ && [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  ],
}, function(err, stats) {
  if(err) {
    throw err
  }
  console.log("[lib] built!")
  console.log(stats.toString())
})
