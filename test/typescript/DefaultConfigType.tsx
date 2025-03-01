/* eslint-disable react-refresh/only-export-components */
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Context, ContextConstructorProps, ContextDebugOptions, Generator, WithRequiredFrom } from '@/lib/index'

const defaultProps = {
  initialVolume: 11,
  initialColour: 'black',
}

type AmplifierProps = ContextDebugOptions & {
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
  config: WithRequiredFrom<AmplifierProps, typeof defaultProps>

  constructor(props: ContextConstructorProps<AmplifierProps, AmplifierState>) {
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

const AmplifierContext = Generator(Amplifier)

const Volume = AmplifierContext.Consumer(
  ({ name, colour, volume }) =>
    <div data-testid="volume">
      {name}'s {colour} amplifier goes up to {volume}
    </div>
)

const OnStage = () =>
  <div>
    <AmplifierContext.Provider name="Nigel">
      <Volume/>
    </AmplifierContext.Provider>
  </div>

it(
  'should go up to eleven',
  async () => {
    render(<OnStage/>)
    const volume = screen.getByTestId('volume')
    expect(volume).toHaveTextContent("Nigel's black amplifier goes up to 11")
  }
)
