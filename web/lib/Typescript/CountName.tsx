import Counter from './Counter'
import { CounterRenderProps } from './Types'

type CountProps = {
  name?: string
}

const Count = ({ count, name='count' }: CounterRenderProps & CountProps) =>
  <p>
    The current {name} is {count}
  </p>

export default Counter.Consumer(Count)