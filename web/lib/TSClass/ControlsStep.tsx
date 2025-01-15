import Counter from './Counter'
import { CounterRenderProps } from './Types'

type ControlsProps = CounterRenderProps & {
  step?: number
}

const Controls = ({ inc, dec, step=10 }: ControlsProps) =>
  <div className="flex gap-2 brand">
    <button onClick={() => dec(step)}>-{step}</button>
    <button onClick={() => dec()}>-1</button>
    <button onClick={() => inc()}>+1</button>
    <button onClick={() => inc(step)}>+{step}</button>
  </div>

export default Counter.Consumer(Controls)