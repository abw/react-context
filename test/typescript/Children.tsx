/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import userEvent from '@testing-library/user-event'
import { Generator, SetState } from '@/lib/index'
import { useState } from 'react'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

type CounterProps = {
  initialCount?: number
}

export type CounterRenderProps = {
  count: number
  setCount: SetState<number>,
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

const Counter = Generator<CounterProps, CounterRenderProps>(
  ({ initialCount=0, render }) => {
    const [count, setCount] = useState(initialCount)
    const inc = (n=1) => setCount(count + n)
    const dec = (n=1) => setCount(count - n)
    return render({
      count, inc, dec, setCount
    })
  }
)

const App = ({ children, ...props }) =>
  <Counter.Provider {...props}>
    {children}
  </Counter.Provider>

const Count = Counter.Consumer(
  ({ count }) =>
    <div data-testid="count">{count}</div>
)

const Controls = Counter.Consumer(
  ({ inc, dec }) =>
    <div>
      <button data-testid="inc" onClick={() => inc()}>Inc</button>
      <button data-testid="dec" onClick={() => dec()}>Dec</button>
    </div>
)

const Demo = () =>
  <App>
    <Count/>
    <Controls/>
  </App>

it(
  'regular components',
  async () => {
    render(<Demo/>)
    const count = screen.getByTestId('count')
    expect(count).toHaveTextContent('0')

    const inc = screen.getByTestId('inc')
    const dec = screen.getByTestId('dec')
    await userEvent.click(inc)
    expect(count).toHaveTextContent('1')
    await userEvent.click(inc)
    expect(count).toHaveTextContent('2')
    await userEvent.click(dec)
    expect(count).toHaveTextContent('1')
  }
)

const App2 = (props) =>
  <Counter.Provider {...props}>
    <Counter.Children>
      Hello
      <div>foo</div>
      {
        ({ count, inc, dec }) =>
          <div>
            <div data-testid="count">{count}</div>
            <button data-testid="inc" onClick={() => inc()}>Inc</button>
            <button data-testid="dec" onClick={() => dec()}>Dec</button>
          </div>
      }
    </Counter.Children>
  </Counter.Provider>

it(
  'children',
  async () => {
    render(<App2/>)
    const count = screen.getByTestId('count')
    expect(count).toHaveTextContent('0')

    const inc = screen.getByTestId('inc')
    const dec = screen.getByTestId('dec')
    await userEvent.click(inc)
    expect(count).toHaveTextContent('1')
    await userEvent.click(inc)
    expect(count).toHaveTextContent('2')
    await userEvent.click(dec)
    expect(count).toHaveTextContent('1')
  }
)
