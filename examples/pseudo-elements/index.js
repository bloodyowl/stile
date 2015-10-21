import React from "react"
import { render } from "react-dom"
import { createStyleSheet, rem, vh, percent } from "../../src"

import "./index.html"

import { fontFamily, mainColor } from "./styles"

const App = () => (
  <div style={styles.container}>
    <div style={styles.text}>
      <span style={styles.line} />
      <span style={styles.textContent}>
        oh hai
      </span>
      <span style={styles.line} />
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
    paddingLeft: rem(1),
    paddingRight: rem(1),
  },
  text: {
    fontFamily,
    color: mainColor,
    fontSize: rem(4),
    display: "flex",
    width: percent(100),
    alignItems: "center",
    justifyContent: "center",
  },
  textContent: {
    flexGrow: 1,
    whiteSpace: "nowrap",
    padding: rem(1),
  },
  // basically use a <div /> or a <span /> in place of pseudo-elements
  line: {
    flexBasis: "50%",
    flexShrink: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
})

render(
  <App />,
  document.body.appendChild(document.createElement("div"))
)
