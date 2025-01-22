/* eslint-disable react-refresh/only-export-components */
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Generator, Context, ContextProps, ContextConstructorProps } from '@/lib/index'

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

type CounterConstructorProps = ContextConstructorProps<CounterProps, CounterState, CounterActions>

class Model extends Context<
  CounterProps,
  CounterState,
  CounterActions
> {
  static actions = 'inc dec'

  constructor(props: CounterConstructorProps) {
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

const Counter = Generator(Model)

const Count = Counter.Consumer(
  ({ count, inc, dec }) =>
    <div>
      <p data-testid="count">{count}</p>
      <button data-testid="inc" onClick={() => inc()}>-1</button>
      <button data-testid="dec" onClick={() => dec()}>+1</button>
    </div>
)

const App = () =>
  <Counter.Provider initialCount={10} debug debugColor="red">
    <Count/>
  </Counter.Provider>

it(
  'should just work',
  async () => {
    render(<App/>)
    const count = screen.getByTestId('count')
    const inc = screen.getByTestId('inc')
    const dec = screen.getByTestId('dec')
    expect(count).toHaveTextContent('10')
    await userEvent.click(inc)
    expect(count).toHaveTextContent('11')
    await userEvent.click(dec)
    await userEvent.click(dec)
    expect(count).toHaveTextContent('9')
  }
)
