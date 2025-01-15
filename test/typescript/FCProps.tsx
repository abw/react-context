/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useState } from 'react'
import { Generator } from '@/lib/index'

export type CounterProps = {
  initialCount?: number
}

export type CounterRenderProps = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>,
}

const Counter = Generator<CounterProps, CounterRenderProps>(
  ({ initialCount = 10, render }) => {
    const [count, setCount] = useState(initialCount)
    return render({
      count, setCount
    })
  }
)

const Count = Counter.Consumer(
  ({ count }) =>
    <div data-testid="count">{count}</div>
)

const Controls = () => {
  const { setCount } = Counter.Use()
  return (
    <div>
      <button
        data-testid="dec"
        onClick={ () => setCount( n => n - 1) }
      >
        Dec
      </button>
      <button
        data-testid="inc"
        onClick={ () => setCount( n => n + 1) }
      >
        Inc
      </button>
    </div>
  )
}

const App1 = () =>
  <Counter.Provider>
    <Count/>
    <Controls/>
  </Counter.Provider>

it(
  'should have default initial count',
  async () => {
    render(<App1/>)
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

const App2 = () =>
  <Counter.Provider initialCount={99}>
    <Count/>
    <Controls/>
  </Counter.Provider>

it(
  'should have custom initial count',
  async () => {
    render(<App2/>)
    const count = screen.getByTestId('count')
    const inc = screen.getByTestId('inc')
    const dec = screen.getByTestId('dec')

    expect(count).toHaveTextContent('99')
    await userEvent.click(inc)
    expect(count).toHaveTextContent('100')
    await userEvent.click(dec)
    await userEvent.click(dec)
    expect(count).toHaveTextContent('98')
  }
)
