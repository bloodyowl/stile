export function em(value) {
  return `${ value }em`
}

export function rem(value) {
  return `${ value }rem`
}

export function percent(value) {
  return `${ value }%`
}

export function deg(value) {
  return `${ value }deg`
}

export function vw(value) {
  return `${ value }vw`
}

export function vh(value) {
  return `${ value }vh`
}

export function join(...values) {
  return values.join(" ")
}

export function list(...values) {
  return values.join(", ")
}
