import React, { Component, PropTypes } from "react"

function isUsingOwnerContext() {
  const { version } = React
  if (typeof version !== "string") {
    return true
  }

  const sections = version.split(".")
  const major = parseInt(sections[0], 10)
  const minor = parseInt(sections[1], 10)

  return major === 0 && minor === 13
}

const noop = () => {}

class ResizeProvider extends Component {

  static childContextTypes = {
    stile: PropTypes.object,
  }

  static propTypes = {
    getViewport: PropTypes.func.isRequired,
    initialViewport: PropTypes.object,
  }

  state = {
    viewport: null,
    viewportWidth: null,
    viewportHeight: null,
  }

  componentWillMount() {
    const {getViewport, initialViewport} = this.props
    if(initialViewport) {
      this.setState({
        viewport: getViewport(initialViewport),
        viewportWidth: initialViewport.width,
        viewportHeight: initialViewport.height,
      })
      return
    }
    this.handleResize()
  }

  componentDidMount() {
    this._handleResize = ::this.handleResize
    window.addEventListener("resize", this._handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleResize)
  }

  handleResize() {
    const { getViewport } = this.props
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    this.setState({
      viewportWidth,
      viewportHeight,
      viewport: getViewport({
        width: viewportWidth,
        height: viewportHeight,
      }),
    })
  }

  getChildContext() {
    return {
      stile: {
        ...this.state,
      },
    }
  }

  render() {
    if(isUsingOwnerContext()) {
      return this.props.children()
    }
    return Children.only(this.props.children)
  }
}

export default ResizeProvider
