import React from "react"
import { render } from "react-dom"
import { createStyleSheet, rem, vh } from "../../src"

import "./index.html"

import { fontFamily, mainColor } from "./styles"

const App = () => (
  <div style={styles.container}>
    <div style={styles.text}>
      oh hai
    </div>
  </div>
)

const styles = createStyleSheet({
  container: {
    background: "#fefefe",
    minHeight: vh(100),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily,
    color: mainColor,
    fontSize: rem(4),
  },
})

render(
  <App />,
  document.body.appendChild(document.createElement("div"))
)
