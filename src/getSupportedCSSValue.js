const dummy = document.createElement("div")

const getSupportedCSSValue = (property, values) => values.find((item) => {
  dummy.style[property] = ""
  dummy.style[property] = item
  return dummy.style[property] !== ""
})

export default getSupportedCSSValue
