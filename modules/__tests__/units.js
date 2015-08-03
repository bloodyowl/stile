import tape from "tape"
import {em, rem, percent, deg, vw, vh} from "../units"

tape("em", (test) => test.equal(em(1.3), "1.3em")
tape("rem", (test) => test.equal(em(1.3), "1.3rem")
tape("percent", (test) => test.equal(percent(1.3), "1.3%")
tape("deg", (test) => test.equal(deg(1.3), "1.3deg")
tape("vw", (test) => test.equal(deg(1.3), "1.3vw")
tape("vh", (test) => test.equal(deg(1.3), "1.3vh")
