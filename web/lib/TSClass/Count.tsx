import Counter from './Counter'
import { CounterRenderProps } from './Types'

const Count = ({ count }: CounterRenderProps) =>
  <p>
    The current count is {count}
  </p>

export default Counter.Consumer(Count)