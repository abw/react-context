import { Generator, Context } from '@/lib/index'
/* START */
// PRETEND: import { Generator, Context } from '@abw/react-context'
import { CounterProps, CounterState, CounterActions } from './Types'

class Counter extends Context<
  CounterProps,
  CounterState,
  CounterActions
> {
  // Corresponds to CounterState
  static initialState = {
    count: 0,
  }
  // Sets CounterState from CounterProps
  static initialProps = {
    count: 'initialCount'
  }
  // Corresponds to CounterActions
  static actions     = 'inc dec'

  // Statics to enable debugging
  static debug       = true
  static debugPrefix = 'Counter > '
  static debugColor  = 'orangered'

  inc(n=1) {
    this.debug(`inc(${n})`)
    this.setState({ count: this.state.count + n })
  }
  dec(n=1) {
    this.debug(`dec(${n})`)
    this.setState({ count: this.state.count - n })
  }
}

export default Generator(Counter)