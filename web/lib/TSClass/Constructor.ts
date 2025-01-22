import { Generator, Context, ContextProps, ContextConstructorProps } from '@/lib/index'
/* START */
// PRETEND: import { Generator, Context, ContextProps, ContextConstructorProps } from '@abw/react-context'

type CounterProps = ContextProps<{
  initialCount?: number
}>
type CounterState = {
  count: number,
}
type CounterActions = {
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

class Counter extends Context<
  CounterProps,
  CounterState,
  CounterActions
> {
  static actions = 'inc dec'

  constructor(
    props: ContextConstructorProps<
      CounterProps,
      CounterState,
      CounterActions
    >
  ) {
    super(props)
    this.state = {
      count: props.initialCount || 10
    }
  }

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