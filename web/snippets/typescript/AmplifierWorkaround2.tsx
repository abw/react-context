const defaultProps = {
  initialVolume: 11
}

type AmplifierDefaultProps = {
  initialVolume?: number
}
type AmplifierRegularProps = {
  name: string
}
type AmplifierProps = AmplifierRegularProps & AmplifierDefaultProps

class Amplifier extends Context<
  AmplifierProps,
  AmplifierState
> {
  config: AmplifierRegularProps & Required<AmplifierDefaultProps>

  constructor(props: AmplifierProps) {
    super(props)
    this.config = {
      ...defaultProps,
      ...props
    }
    this.state = {
      volume: this.config.initialVolume
    }
  }
  componentDidUpdate(prevProps) {
    this.config = {
      ...defaults,
      ...this.props
    }
  }
}
