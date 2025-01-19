import { AmplifierConsumer } from './Context'

export const Controls = AmplifierConsumer(
  ({ oneLouder, oneQuieter, setVolume, reset }) =>
    <div className="mar-t-2 flex gap-2 blue">
      <button data-testid="louder" onClick={oneLouder}>Louder</button>
      <button data-testid="quieter" onClick={oneQuieter}>Quieter</button>
      <button data-testid="eleven" onClick={() => setVolume(11)}>Eleven</button>
      <button data-testid="reset" onClick={reset}>Reset</button>
    </div>
)

export default Controls