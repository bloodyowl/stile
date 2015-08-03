# stile

> a simple tool to help you using inline-styles with react

## install

```console
$ npm install --save stile
```

## modules

```javascript
import {
  createStyleSheet,
  em,
  rem,
  percent,
  deg,
  vw,
  vh,
} from "stile"

import {
  resizeable,
  ResizeProvider,
} from "stile/react"
```

## api

### object createStyleSheet(styles: object)

Prefixes and freezes your style declaration.

```javascript
const styles = createStyleSheet({
  title: {
    color: "red",
  },
})
```

### string em(value: number)

Adds the `em` unit to your value

```javascript
em(1.5) // "1.5em"
```

### string rem(value: number)

Adds the `rem` unit to your value

```javascript
rem(1.5) // "1.5rem"
```

### string percent(value: number)

Adds the `%` unit to your value

```javascript
percent(1.5) // "1.5%"
```

### string deg(value: number)

Adds the `deg` unit to your value

```javascript
deg(1.5) // "1.5deg"
```

### string vw(value: number)

Adds the `vw` unit to your value

```javascript
vw(1.5) // "1.5vw"
```

### string vh(value: number)

Adds the `vh` unit to your value

```javascript
vh(1.5) // "1.5vh"
```

### @resizeable() class

Creates a higher-order component giving to your component some props about
the viewport. Also makes your component update whenever the window is resized.

> Requires ResizeProvider

```javascript
@resizeable()
class MyComponent {
  const { viewport, viewportWidth, viewportHeight } = this.props
}
```

### ResizeProvider

A component to put at the top of your app, basically managing the resizeable
components. The `getViewport` prop lets you return what these components will
receive as `viewport` prop. The `initialViewport` is passed to `getViewport`
the first time if defined in order to be able to render on the server.

```javascript
React.render(
  <ResizeProvider
    initialViewport={{width: 100, height: 200}}
    getViewport={({ width, height }) => width > 100 ? "M" : "S"}>
    {/* NOTE: you pass a function as callback */}
    {() => <App />}
  </ResizeProvider>,
  mountNode
)
```
