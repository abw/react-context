/* eslint-disable react-refresh/only-export-components */
import userEvent from '@testing-library/user-event'
import { Generator, RenderChildren, SetState } from '@/lib/index'
import { ReactNode, useState } from 'react'
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

const App = ({ children, ...props }: { children: ReactNode }) =>
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

const App2 = (props: CounterProps) =>
  <Counter.Provider {...props}>
    <Counter.Children>
      {
        ({ count }) =>
          <div data-testid="count">{count}</div>
      }
    </Counter.Children>
    <Counter.Children>
      <div>before</div>
      {
        ({ inc, dec }) =>
          <div>
            <button data-testid="inc" onClick={() => inc()}>Inc</button>
            <button data-testid="dec" onClick={() => dec()}>Dec</button>
          </div>
      }
      <div>after</div>
    </Counter.Children>
    <MoreChildren/>
    <NoChildren/>
  </Counter.Provider>

type CounterChildren = RenderChildren<CounterRenderProps>

const MaybeChildren = Counter.Consumer<
  CounterChildren
>(
  ({
    children
  }) =>
    <div>
      { children
        ? <Counter.Children>
            {children}
          </Counter.Children>
        : <div>No Children</div>
      }
    </div>
)

const MoreChildren = () =>
  <MaybeChildren>
    {
      ({ inc, dec }) =>
        <div>
          <button data-testid="inc10" onClick={() => inc(10)}>Inc 10</button>
          <button data-testid="dec10" onClick={() => dec(10)}>Dec 10</button>
        </div>
    }
  </MaybeChildren>

const NoChildren = () =>
  <MaybeChildren>
    <div data-testid="message">Hello World</div>
  </MaybeChildren>

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

    const inc10 = screen.getByTestId('inc10')
    const dec10 = screen.getByTestId('dec10')
    await userEvent.click(inc10)
    expect(count).toHaveTextContent('11')
    await userEvent.click(dec10)
    expect(count).toHaveTextContent('1')

    const message = screen.getByTestId('message')
    expect(message).toHaveTextContent('Hello World')
  }
)

