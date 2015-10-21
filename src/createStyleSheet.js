import autoprefix from "./autoprefix"

const createStyleSheet = (styles) =>
  Object.freeze(
    Object.keys(styles)
      .reduce((acc, key) => {
        acc[key] = Object.freeze(autoprefix(styles[key]))
        return acc
      }, {})
  )

export default createStyleSheet
