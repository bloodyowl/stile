import rimraf from "rimraf"
import path from "path"

rimraf.sync(path.resolve(__dirname, "../dist"))
rimraf.sync(path.resolve(__dirname, "../.tmp"))

console.log("[clean] done!")
