import getSupportedCSSValue from "./getSupportedCSSValue"

const FLEX_VALUE = getSupportedCSSValue(
  "display",
  ["flex", "-webkit-flex", "-ms-flexbox"]
)

const INLINE_FLEX_VALUE = getSupportedCSSValue(
  "display",
  ["inline-flex", "-webkit-inline-flex", "-ms-inline-flexbox"]
)

// from https://github.com/petehunt/jsxstyle/blob/master/lib/autoprefix.js
export default function autoprefix(style) {

  style = {...style}

  if (style.hasOwnProperty("userSelect")) {
    Object.assign(style, {
      WebkitUserSelect: style.userSelect,
      MozUserSelect: style.userSelect,
      msUserSelect: style.userSelect,
    })
  }

  if (style.hasOwnProperty("transition")) {
    Object.assign(style, {
      WebkitTransition: style.transition,
      MozTransition: style.transition,
      msTransition: style.transition,
    })
  }

  if (style.hasOwnProperty("transform")) {
    Object.assign(style, {
      WebkitTransform: style.transform,
      MozTransform: style.transform,
      msTransform: style.transform,
    })
  }

  if (style.hasOwnProperty("boxShadow")) {
    Object.assign(style, {
      WebkitBoxShadow: style.boxShadow,
      MozBoxShadow: style.boxShadow,
      msBoxSelect: style.boxShadow,
    })
  }

  if (style.hasOwnProperty("fontSmoothing")) {
    Object.assign(style, {
      WebkitFontSmoothing: style.fontSmoothing,
      MozOsxFontSmoothing:
        style.fontSmoothing === "antialiased" ? "grayscale" : undefined,
    })
  }

  if (style.hasOwnProperty("flex")) {
    Object.assign(style, {
      WebkitFlex: style.flex,
    })
  }

  if (style.hasOwnProperty("flexDirection")) {
    Object.assign(style, {
      WebkitFlexDirection: style.flexDirection,
    })
  }

  if (style.hasOwnProperty("flexFlow")) {
    Object.assign(style, {
      WebkitFlexFlow: style.flexFlow,
    })
  }

  if (style.hasOwnProperty("flexWrap")) {
    Object.assign(style, {
      WebkitFlexWrap: style.flexWrap,
    })
  }

  if (style.hasOwnProperty("alignItems")) {
    Object.assign(style, {
      WebkitAlignItems: style.alignItems,
    })
  }

  if (style.hasOwnProperty("flexGrow")) {
    Object.assign(style, {
      WebkitFlexGrow: style.flexGrow,
    })
  }

  if (style.hasOwnProperty("flexShrink")) {
    Object.assign(style, {
      WebkitFlexShrink: style.flexShrink,
    })
  }

  if (style.hasOwnProperty("order")) {
    Object.assign(style, {
      WebkitOrder: style.order,
    })
  }

  if (style.hasOwnProperty("justifyContent")) {
    Object.assign(style, {
      WebkitJustifyContent: style.justifyContent,
    })
  }

  if (style.display === "flex") {
    style.display = FLEX_VALUE
  }

  if (style.display === "inline-flex") {
    style.display = INLINE_FLEX_VALUE
  }

  return style
}
