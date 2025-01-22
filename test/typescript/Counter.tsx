/* eslint-disable react-refresh/only-export-components */
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Generator, Context, ContextProps } from '@/lib/index'

export type CounterProps = ContextProps<{
  initialCount?: number
}>

export type CounterState = {
  count: number
}

export type CounterActions = {
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

class Model extends Context<
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
