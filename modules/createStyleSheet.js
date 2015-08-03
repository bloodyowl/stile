import autoprefix from "./autoprefix"

export default function createStyleSheet(styles) {
  return Object.freeze(
    Object.keys(styles)
      .reduce((acc, key) => {
        acc[key] = Object.freeze(autoprefix(styles[key]))
        return acc
      }, {})
  )
}
