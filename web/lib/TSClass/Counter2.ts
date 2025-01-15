import { Generator, Context } from '@/lib/index'
import { CounterProps, CounterState, CounterRenderProps } from './Types'

export default Generator(
  class Counter extends Context<
    CounterProps,
    CounterState,
    CounterRenderProps
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
// export default Generator(Counter)