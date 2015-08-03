import React, { Component, PropTypes, Children } from "react"

export default () => (ChildComponent) =>
  class extends Component {

    static contextTypes = {
      stile: PropTypes.object.isRequired,
    }

    render() {
      return (
        <ChildComponent {...this.props} {...this.context.stile} />
      )
    }
  }
