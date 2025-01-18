const n=`type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>

const defaultProps = {
  initialVolume: 11,
  initialColour: 'black'
}

type AmplifierProps = {
  name: string
  initialVolume?: number
  initialColour?: string
}

type AmplifierState = {
  volume: number
  colour: string
}

class Amplifier extends Context<
  AmplifierProps,
  AmplifierState
> {
  config: WithRequired<AmplifierProps, 'initialVolume' | 'initialColour'>

  constructor(props: AmplifierProps) {
    super(props)
    this.config = {
      ...defaultProps,
      ...props
    }
    this.state = {
      volume: this.config.initialVolume,
      colour: this.config.initialColour
    }
  }
}
`;export{n as default};
