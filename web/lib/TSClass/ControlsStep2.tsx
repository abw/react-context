import Counter from './Counter'

type CounterProps = {
  step?: number
}

export default Counter.Consumer<CounterProps>(
  ({ inc, dec, step=10 }) =>
    <div className="flex gap-2 brand">
      <button onClick={() => dec(step)}>-{step}</button>
      <button onClick={() => dec()}>-1</button>
      <button onClick={() => inc()}>+1</button>
      <button onClick={() => inc(step)}>+{step}</button>
    </div>
)
