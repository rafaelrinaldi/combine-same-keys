export default function combineSameKeys (...args) {
  return [].slice.call(args).reduce((next, value) => {
    const duplicates = Object.keys(value)
      .filter(key => next.hasOwnProperty(key))
      .map(key => ({ [key]: Object.assign(value[key], next[key]) }))
      .reduce((accumulator, current) => Object.assign(accumulator, current), {})

    return Object.assign(next, value, duplicates)
  })
}
