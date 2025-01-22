/* eslint-disable react-refresh/only-export-components */
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Context, ContextConstructorProps, ContextDebugOptions, Generator } from '@/lib/index'

type AmplifierProps = ContextDebugOptions & {
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
    initialVolume: 11
  }
  constructor(props: ContextConstructorProps<AmplifierProps, AmplifierState>) {
    super(props)
    this.state = {
      // @ts-expect-error - state.volume can't be undefined but AmplifierProps
      // has it has optional
      volume: this.props.initialVolume
    }
  }
}

const AmplifierContext = Generator(Amplifier)

const Volume = AmplifierContext.Consumer(
  ({ volume }) =>
    <div data-testid="volume">This goes up to {volume}</div>
)

const OnStage = () =>
  <div>
    <AmplifierContext.Provider>
      <Volume/>
    </AmplifierContext.Provider>
  </div>

it(
  'should go up to eleven',
  async () => {
    render(<OnStage/>)
    const volume = screen.getByTestId('volume')
    expect(volume).toHaveTextContent('This goes up to 11')
  }
)
