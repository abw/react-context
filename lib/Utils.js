export function prepareState(initialState={}, initialProps={}, props={}) {
  return Object.entries(initialProps).reduce(
    (state, [key, propName]) => {
      const value = props[propName]
      if (value !== null && typeof value !== 'undefined') {
        state[key] = value
      }
      return state
    },
    { ...initialState }
  )
}

export function actionMethods(that, names=[]) {
  const methods = typeof names === 'string'
    ? names.split(/,\s*|\s+/)
    : names
  return methods.reduce(
    (actions, name) => {
      const method = that[name]
        || fail(`Cannot expose non-existent action method: ${name}`)
      actions[name] = method.bind(that)
      return actions
    },
    { }
  )
}

export function debugFunction(props, statics) {
  const debug  = props.debug ?? statics.debug
  const prefix = maybeFunction(props.debugPrefix ?? statics.debugPrefix, props)
  const color  = maybeFunction(props.debugColor  ?? statics.debugColor, props)
  if (! debug)  { return () => { } }
  if (! prefix) { return console.log.bind(console) }
  return (format, ...args) => console.log(
    `%c${prefix}%c${format}`, `color: ${color}`, 'color:black',
    ...args
  )
}

function maybeFunction(fn, args) {
  return (typeof fn === 'function')
    ? fn(args)
    : fn
}

function fail(...msg) {
  throw new Error(msg.join(''))
}

