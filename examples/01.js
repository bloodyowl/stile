import "babel/polyfill"
import assign from "object-assign"

if(typeof Object.assign !== "function") {
  Object.assign = assign
}

import React, {Component} from "react"
import { createStyleSheet, rem, vh } from "../modules"

import "./01.html"

class Demo {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          Helloworld
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
})

React.render(
  <Demo />,
  document.body.appendChild(document.createElement("div"))
)
