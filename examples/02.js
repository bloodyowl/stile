import React, {Component} from "react"
import { createStyleSheet, rem, vh } from "../modules"
import { ResizeProvider, resizeable } from "../modules/react"

import "./02.html"

@resizeable()
class Demo {
  render() {
    const { viewport, viewportWidth, viewportHeight } = this.props
    return (
      <div style={styles.container}>
        <div
          style={{
            ...styles.title,
            ...viewport === "S" && styles.small,
            ...viewport === "M" && styles.medium,
            ...viewport === "L" && styles.large,
          }}>
          Viewport : {viewport}
          <br />
          Viewport width : {viewportWidth}
          <br />
          Viewport height : {viewportHeight}
          <br />
        </div>
      </div>
    )
  }
}

const styles = createStyleSheet({
  container: {
    background: "#f1f1f1",
    minHeight: vh(100),
  },
  title: {
    fontSize: rem(2),
  },
  large: {
    color: "red",
  },
  medium: {
    color: "green",
  },
  small: {
    color: "blue",
  },
})

const getViewport = ({ width }) => width > 800 ? "L" : width > 500 ? "M" : "S"

React.render(
  <ResizeProvider getViewport={getViewport}>
    {() => <Demo />}
  </ResizeProvider>,
  document.body.appendChild(document.createElement("div"))
)
