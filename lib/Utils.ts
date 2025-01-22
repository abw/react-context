import { fail, isArray, isFunction, isString, maybeFunction } from '@abw/badger-utils'
import { ActionMethods, ContextDebugOptions } from './types'

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

export function actionMethods(
  that: React.Component,
  names: string | string[] = []
): ActionMethods {
  const methods = isString(names)
    ? names.split(/,\s*|\s+/)
    : names
  return methods.reduce(
    (actions, name) => {
      const method = (that as unknown as Record<string, unknown>)[name]
        || fail(`Cannot expose non-existent action method: ${name}`)
      if (isFunction(method)) {
        actions[name] = method.bind(that)
      }
      else {
        fail(`Cannot bind to non-function method: ${name}`)
      }
      return actions
    },
    { } as ActionMethods
  )
}

export function debugFunction(props: ContextDebugOptions, statics: ContextDebugOptions) {
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

