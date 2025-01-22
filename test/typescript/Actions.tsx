/* eslint-disable react-refresh/only-export-components */
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Context, ContextConstructorProps, ContextProps, Generator, WithRequiredFrom } from '@/lib/index'

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
    // this.actions = this.prepareActions()
    // this.a = this.setVolume.bind(this)
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
  getRenderProps() {
    return {
      ...this.props,    // properties passed to the context
      ...this.state,    // internal state
      ...this.actions,  // callable action functions mapped to methods
    }
  }

}

const AmplifierContext = Generator(Amplifier)

const Volume = AmplifierContext.Consumer(
  ({ volume }) =>
    <div data-testid="volume">Volume: {volume}</div>
)

const Controls = AmplifierContext.Consumer(
  ({ oneLouder, oneQuieter, setVolume, reset }) =>
    <>
      <button data-testid="louder" onClick={oneLouder}>Louder</button>
      <button data-testid="quieter" onClick={oneQuieter}>Quieter</button>
      <button data-testid="eleven" onClick={() => setVolume(11)}>Eleven</button>
      <button data-testid="reset" onClick={reset}>Reset</button>
    </>
)

const OnStage = () =>
  <div>
    <AmplifierContext.Provider>
      <Volume/>
      <Controls/>
    </AmplifierContext.Provider>
  </div>

it(
  'should go up to eleven',
  async () => {
    render(<OnStage/>)
    const volume = screen.getByTestId('volume')
    expect(volume).toHaveTextContent('Volume: 10')

    const louder = screen.getByTestId('louder')
    const quieter = screen.getByTestId('quieter')
    const eleven = screen.getByTestId('eleven')
    const reset = screen.getByTestId('reset')

    screen.debug()
    await userEvent.click(louder)
    expect(volume).toHaveTextContent('Volume: 11')
    await userEvent.click(reset)
    expect(volume).toHaveTextContent('Volume: 10')
    await userEvent.click(quieter)
    expect(volume).toHaveTextContent('Volume: 9')
    await userEvent.click(eleven)
    expect(volume).toHaveTextContent('Volume: 11')
  }
)
