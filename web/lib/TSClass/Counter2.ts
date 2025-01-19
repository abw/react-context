import { Generator, Context } from '@/lib/index'
/* START */
// PRETEND: import { Generator, Context } from '@abw/react-context'
import { CounterProps, CounterState, CounterActions } from './Types'

export default Generator(
  class Counter extends Context<
    CounterProps,
    CounterState,
    CounterActions
  > {
    static initialState = {
      count: 0,
    }
    static initialProps = {
      count: 'initialCount'
    }
    static actions = 'inc dec'

    inc(n=1) {
      this.debug(`inc(${n})`)
      this.setState({ count: this.state.count + n })
    }
    dec(n=1) {
      this.debug(`dec(${n})`)
      this.setState({ count: this.state.count - n })
    }
  }
)
