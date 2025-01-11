import Counter from './Counter'

export default Counter.Consumer(
  ({ inc, dec }) =>
    <div className="flex gap-2 brand">
      <button onClick={() => dec(10)}>-10</button>
      <button onClick={() => dec()}>-1</button>
      <button onClick={() => inc()}>+1</button>
      <button onClick={() => inc(10)}>+10</button>
    </div>
)
