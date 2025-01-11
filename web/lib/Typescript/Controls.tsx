import Counter from './Counter'
import { CounterRenderProps } from './Types'

const Controls = ({ inc, dec }: CounterRenderProps) =>
  <div className="flex gap-2 brand">
    <button onClick={() => dec(10)}>-10</button>
    <button onClick={() => dec()}>-1</button>
    <button onClick={() => inc()}>+1</button>
    <button onClick={() => inc(10)}>+10</button>
  </div>

export default Counter.Consumer(Controls)