import "babel/polyfill"
import assign from "object-assign"

if(typeof Object.assign !== "function") {
  Object.assign = assign
}

import React, {Component} from "react"
import { createStyleSheet, rem, vh, ResizeProvider, resizeable } from "../modules"

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
          <span style={styles.text}>
          Viewport : {viewport}
          </span>
          <span style={styles.text}>
          Viewport width : {viewportWidth}
          </span>
          <span style={styles.text}>
          Viewport height : {viewportHeight}
          </span>
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
    fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
    textAlign: "center",
    fontWeight: 700,
    display: "flex",
    flexDirection: "row",
  },
  large: {
    color: "red",
  },
  medium: {
    color: "green",
    flexDirection: "column",
  },
  small: {
    color: "blue",
  },
  text: {
    padding: ".25rem .5rem",
  },
})

const getViewport = ({ width }) => width > 800 ? "L" : width > 500 ? "M" : "S"

React.render(
  <ResizeProvider getViewport={getViewport}>
    {() => <Demo />}
  </ResizeProvider>,
  document.body.appendChild(document.createElement("div"))
)
