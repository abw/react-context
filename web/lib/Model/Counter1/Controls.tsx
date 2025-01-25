import { Consumer } from './Counter'

type ControlsProps = {
  color?: string
}

export const Controls = Consumer<ControlsProps>(
  ({ inc, dec, color }) =>
    <div className={`flex gap-2 mar-t-4 ${color}`}>
      <button onClick={() => dec()}>
        Dec
      </button>
      <button onClick={() => inc()}>
        Inc
      </button>
    </div>
)

export default Controls