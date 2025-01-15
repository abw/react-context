/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useState } from 'react'
import { Generator } from '@/lib/index'

export type CounterRenderProps = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>,
}

const Counter = Generator<{ }, CounterRenderProps>(
  ({ render }) => {
    const [count, setCount] = useState(50)
    return render({
      count, setCount
    })
  }
)

// If we want a consumer component to accept additional props then we must
// define a type and add it to the Consumer generic.
type CountProps = { id?: string }

const Count = Counter.Consumer<CountProps>(
  ({ count, id='count' }) =>
    <div data-testid={id}>{count}</div>
)

const Controls = () => {
  const { setCount } = Counter.Use()
  return (
    <div>
      <button
        data-testid="dec2"
        onClick={ () => setCount( n => n - 2) }
      >
        Dec 2
      </button>
      <button
        data-testid="inc1"
        onClick={ () => setCount( n => n + 1) }
      >
        Inc 1
      </button>
    </div>
  )
}

const App1 = () =>
  <Counter.Provider>
    <Count/>
    <Count id="count2"/>
    <Controls/>
  </Counter.Provider>

it(
  'should have default initial count',
  async () => {
    render(<App1/>)
    const count = screen.getByTestId('count')
    const count2 = screen.getByTestId('count2')
    const inc1 = screen.getByTestId('inc1')
    const dec2 = screen.getByTestId('dec2')

    expect(count).toHaveTextContent('50')
    expect(count2).toHaveTextContent('50')
    await userEvent.click(inc1)
    expect(count).toHaveTextContent('51')
    expect(count2).toHaveTextContent('51')
    await userEvent.click(dec2)
    expect(count).toHaveTextContent('49')
    expect(count2).toHaveTextContent('49')
  }
)
