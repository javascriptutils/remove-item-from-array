import reduceAndRemove from './utils/reduce-and-remove.js'
import flatten from './utils/flatten.js'

export default function removeTask(arr, ...items) {
  return arr.reduce(reduceAndRemove(...items), []).reduce(flatten, [])
}
