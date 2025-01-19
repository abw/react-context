import { AmplifierConsumer } from './Context'

export const Volume = AmplifierConsumer(
  ({ volume }) =>
    <div className="large">Volume: {volume}</div>
)

export default Volume