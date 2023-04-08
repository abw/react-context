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

function fail(...msg) {
  throw new Error(msg.join(''))
}