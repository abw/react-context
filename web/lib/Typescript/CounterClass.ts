import { Generator, Context, SetState } from '@/lib/index'

type CounterProps = {
  initialCount?: number
}
type CounterState = {
  count: number,
}
type CounterRenderProps = {
  count: number,
  setCount: SetState<number>
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

class Counter extends Context<
  CounterProps,
  CounterState,
  CounterRenderProps
> {
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