import React, { Component } from "react"
import { createStyleSheet, rem } from "../../src"

class Button extends Component {

  state = {
    hovered: false,
    depressed: false,
  }

  render() {
    const { hovered, depressed } = this.state
    const { children, ...props } = this.props
    return (
      <button
        {...props}
        onMouseDown={() => this.setState({ depressed: true })}
        onMouseUp={() => this.setState({ depressed: false })}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        style={{
          ...styles.button,
          ...hovered && styles.hoveredButton,
          ...depressed && styles.depressedButton,
        }}
      >
        {children}
      </button>
    )
  }
}

const styles = createStyleSheet({
  button: {
    padding: rem(.5),
    border: "none",
    backgroundColor: "#369",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.1))",
    borderRadius: rem(.125),
    cursor: "pointer",
    color: "#fff",
    outline: "none",
    fontSize: rem(.75),
  },
  hoveredButton: {
    backgroundColor: "#47a",
  },
  depressedButton: {
    backgroundColor: "#147",
  },
})

export default Button
