import React, { Component } from "react"
import { render } from "react-dom"
import { createStyleSheet, rem, vh } from "../../src"

import "./index.html"

import Button from "./Button"

const App = () => (
  <div style={styles.container}>
    <Button>I'm a button</Button>
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
})

render(
  <App />,
  document.body.appendChild(document.createElement("div"))
)
