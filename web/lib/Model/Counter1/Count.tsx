import { Consumer } from './Counter'

export const Count = Consumer(
  ({ count }) =>
    <div className="larger">{count}</div>
)

export default Count