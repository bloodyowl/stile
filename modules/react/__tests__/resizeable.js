import tape from "tape-catch"
import React, {Component, addons} from "react/addons"
import resizeable from "../resizeable"
import ResizeProvider from "../ResizeProvider"

const {TestUtils} = addons

tape("resizeable", (test) => {

  @resizeable()
  class TestComponent {
    render() {
      const {viewport, viewportWidth, viewportHeight} = this.props
      test.equal(viewport, "ok")
      test.equal(viewportWidth, 150)
      test.equal(viewportHeight, 150)
      test.end()
      return null
    }
  }

  TestUtils.renderIntoDocument(
    <ResizeProvider
      initialViewport={{ width: 150, height: 150 }}
      getViewport={({ width, height }) => {
        test.equal(width, 150)
        test.equal(height, 150)
        return "ok"
      }}>
      {() => <div><TestComponent /></div>}
    </ResizeProvider>
  )
})
