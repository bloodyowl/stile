// from https://github.com/petehunt/jsxstyle/blob/master/lib/autoprefix.js
export default function autoprefix(style) {

  style = {...style}

  const alignItemsOldValues = {
    "flex-start": "start",
    "flex-end": "end",
    "center": "center",
    "baseline": "baseline",
    "stretch": "stretch",
  }

  const justifyContentOldValues = {
    "flex-start": "start",
    "flex-end": "end",
    "space-between": "justify",
    "space-around": "distribute",
  }

  const flexWrapOldValues = {
    "nowrap": "none",
    "wrap": "wrap",
    "wrap-reverse": "wrap-reverse",
  }

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
      msFlex: style.flex,
    })
  }

  if (style.hasOwnProperty("flexDirection")) {
    Object.assign(style, {
      WebkitFlexDirection: style.flexDirection,
      msFlexDirection: style.flexDirection,
    })
  }

  if (style.hasOwnProperty("flexFlow")) {
    Object.assign(style, {
      WebkitFlexFlow: style.flexFlow,
      msFlexFlow: style.flexFlow,
    })
  }

  if (style.hasOwnProperty("flexWrap")) {
    Object.assign(style, {
      WebkitFlexWrap: style.flexWrap,
      msFlexWrap: style.flexWrap,
    })
  }

  if (style.hasOwnProperty("alignItems")) {
    Object.assign(style, {
      WebkitAlignItems: style.alignItems,
      msFlexAlignItems: alignItemsOldValues[style.alignItems],
    })
  }

  if (style.hasOwnProperty("flexGrow")) {
    Object.assign(style, {
      WebkitFlexGrow: style.flexGrow,
      msFlexPositive: style.flexGrow,
    })
  }

  if (style.hasOwnProperty("flexShrink")) {
    Object.assign(style, {
      WebkitFlexShrink: style.flexShrink,
      msFlexNegative: style.flexShrink,
    })
  }

  if (style.hasOwnProperty("order")) {
    Object.assign(style, {
      WebkitOrder: style.order,
      msFlexOrder: style.order,
    })
  }

  if (style.hasOwnProperty("justifyContent")) {
    Object.assign(style, {
      WebkitJustifyContent: style.justifyContent,
      msFlexPack: justifyContentOldValues[style.justifyContent]
    })
  }

  if (style.display === "flex") {
    style.display = style.display + ";display:-webkit-flex;display:-ms-flexbox"
  }

  if (style.display === "inline-flex") {
    style.display =
      style.display + ";display:-webkit-inline-flex;display:-ms-inline-flexbox"
  }

  return style
}
