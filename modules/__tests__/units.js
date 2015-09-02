import tape from "tape-catch"
import {em, rem, percent, deg, vw, vh, join, list} from "../units"

tape("em", (test) => {
  test.equal(em(1.3), "1.3em")
  test.end()
})
tape("rem", (test) => {
  test.equal(rem(1.3), "1.3rem")
  test.end()
})
tape("percent", (test) => {
  test.equal(percent(1.3), "1.3%")
  test.end()
})
tape("deg", (test) => {
  test.equal(deg(1.3), "1.3deg")
  test.end()
})
tape("vw", (test) => {
  test.equal(vw(1.3), "1.3vw")
  test.end()
})
tape("vh", (test) => {
  test.equal(vh(1.3), "1.3vh")
  test.end()
})
tape("join", (test) => {
  test.equal(join(0, 0, rem(1)), "0 0 1rem")
  test.end()
})
tape("list", (test) => {
  test.equal(list(0, 0, rem(1)), "0, 0, 1rem")
  test.end()
})
