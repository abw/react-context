import { Context, Generator } from '../../../lib/index.js'

// This is our basic "model" component which stores the state (count)
// and has methods to manipulate it (inc() and dec())
class Counter extends Context {
  // the initial state
  static initialState = {
    count: 0,
  }
  // properties which can set the state, e.g. count can be set by initialCount
  static initialProps = {
    count: 'initialCount',
  }
  // methods to expose as actions
  static actions     = 'inc dec'
  // debugging options
  static debug       = true
  static debugPrefix = 'Counter > '
  static debugColor  = 'orangered'

  inc() {
    this.debug('inc()')
    this.setState(
      state => ({ count: state.count + 1 })
    )
  }
  dec() {
    this.debug('dec()')
    this.setState(
      state => ({ count: state.count - 1 })
    )
  }
}

// Upgrade the Counter class to a context provider/consumer
export default Generator(Counter)
