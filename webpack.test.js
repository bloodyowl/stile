import "babel/polyfill"
import assign from "object-assign"

if(typeof Object.assign !== "function") {
  Object.assign = assign
}

var context = require.context("./modules", true, /__tests__\/\S+\.js$/)
context.keys().forEach(context)
