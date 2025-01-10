import { fail, isArray, isFunction, isString, maybeFunction } from '@abw/badger-utils'
import { DebugOptions } from './types'

export function prepareState(
  initialState: Record<string, unknown> = { },
  initialProps: Record<string, unknown> = { },
  props: Record<string, unknown> = { }
) {
  return Object.entries(initialProps).reduce(
    (state, [key, propName]) => {
      const value = props[propName as string]
      if (value !== null && typeof value !== 'undefined') {
        state[key] = value
      }
      return state
    },
    { ...initialState }
  )
}

export function actionMethods(that: Record<string, unknown>, names=[]) {
  const methods = isString(names)
    ? names.split(/,\s*|\s+/)
    : names
  return methods.reduce(
    (actions, name) => {
      const method = that[name]
        || fail(`Cannot expose non-existent action method: ${name}`)
      if (isFunction(method)) {
        actions[name] = method.bind(that)
      }
      else {
        fail(`Cannot bind to non-function method: ${name}`)
      }
      return actions
    },
    { } as Record<string, unknown>
  )
}

export function debugFunction(props: DebugOptions, statics: DebugOptions) {
  const debug  = props.debug ?? statics.debug
  const prefix = maybeFunction(props.debugPrefix ?? statics.debugPrefix, props)
  const color  = maybeFunction(props.debugColor  ?? statics.debugColor, props)
  if (! debug)  { return () => { } }
  if (! prefix) { return console.log.bind(console) }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (format: string, ...args: any[]) => console.log(
    `%c${prefix}%c${format}`, `color: ${color}`, 'color:black',
    ...args
  )
}

/*
export function isArray(value) {
  return Array.isArray(value)
}

export function isFunction(fn) {
  return typeof fn === 'function'
}

export function maybeFunction(fn, args) {
  return isFunction(fn)
    ? fn(args)
    : fn
}

export function fail(...msg) {
  throw new Error(msg.join(''))
}


*/

/**
 * Coerces a non-array value into a single element array.
 * @example
 * toArray(10)   // => [10]
 * @example
 * toArray([20]) // => [20]
 */
export const toArray = (item: unknown) =>
  isArray(item)
    ? item
    : [item]

