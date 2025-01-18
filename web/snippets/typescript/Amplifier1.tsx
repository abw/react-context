import { Context, Generator } from '@abw/react-context'

type AmplifierProps = {
  initialVolume?: number
}
type AmplifierState = {
  volume: number
}
class Amplifier extends Context<
  AmplifierProps,
  AmplifierState
> {
  static defaultProps = {
    initialVolume: 10,
  }
  constructor(props: AmplifierProps) {
    super(props)
    this.state = {
      // Type 'number | undefined' is not assignable to type 'number'.
      // Type 'undefined' is not assignable to type 'number'.ts(2322)
      volume: this.props.initialVolume
    }
  }
}
