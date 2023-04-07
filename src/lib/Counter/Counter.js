import { Context, Generator } from '../../../lib/index.js'

{/* START */}
// PRETEND: import { Context, Generator } from '@abw/react-context'

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
  static debug       = false
  static debugPrefix = 'Counter > '
  static debugColor  = 'orangered'

  inc(n=1) {
    this.debug(`inc(${n})`)
    this.setState(
      state => ({ count: state.count + n })
    )
  }
  dec(n=1) {
    this.debug(`dec(${n})`)
    this.setState(
      state => ({ count: state.count - n })
    )
  }
}

// Upgrade the Counter class to a context wrapper
export default Generator(Counter)