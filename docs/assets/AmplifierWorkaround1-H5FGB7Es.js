const n=`const defaultProps = {
  initialVolume: 10
}

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
  constructor(props: AmplifierProps) {
    super(props)
    this.state = {
      volume: this.props.initialVolume || defaultProps.initialVolume
    }
  }
}
`;export{n as default};
