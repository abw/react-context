import { Context, ContextConstructorProps, ContextProps, Generator, WithRequiredFrom } from '@/lib/index'
/* START */
// PRETEND: import { Context,ContextConstructorProps, ContextProps, Generator, WithRequiredFrom } from '@abw/react-context'

const defaultProps = {
  initialVolume: 10,
}

type AmplifierProps = ContextProps<{
  initialVolume?: number
}>
type AmplifierState = {
  volume: number
}
type AmplifierActions = {
  oneLouder: () => void
  oneQuieter: () => void
  setVolume: (v: number) => void
  reset: () => void
}

class Amplifier extends Context<
  AmplifierProps,
  AmplifierState,
  AmplifierActions
> {
  config: WithRequiredFrom<AmplifierProps, typeof defaultProps>

  constructor(props: ContextConstructorProps<AmplifierProps, AmplifierState, AmplifierActions>) {
    super(props)
    this.config = {
      ...defaultProps,
      ...props
    }
    this.state = {
      volume: this.config.initialVolume,
    }
  }
  initActions(): AmplifierActions {
    return {
      oneLouder: this.oneLouder.bind(this),
      oneQuieter: this.oneQuieter.bind(this),
      setVolume: this.setVolume.bind(this),
      reset: this.reset.bind(this),
    }
  }
  oneLouder() {
    this.setState({ volume: this.state.volume + 1 })
  }
  oneQuieter() {
    this.setState({ volume: this.state.volume - 1 })
  }
  setVolume(v: number) {
    this.setState({ volume: v })
  }
  reset() {
    this.setState({
      volume: this.config.initialVolume
    })
  }
}

export const AmplifierContext = Generator(Amplifier)

export const {
  Provider: AmplifierProvider,
  Consumer: AmplifierConsumer,
  Use: useAmplifier,
} = AmplifierContext

export default AmplifierContext

