/* eslint-disable react-refresh/only-export-components */
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Context, Generator } from '@/lib/index'

const defaultProps = {
  initialVolume: 11
}

type AmplifierRequiredProps = {
  name: string
}
type AmplifierOptionalProps = {
  initialVolume?: number
}
type AmplifierProps = AmplifierRequiredProps & AmplifierOptionalProps

type AmplifierState = {
  volume: number
}

class Amplifier extends Context<
  AmplifierProps,
  AmplifierState
> {
  config: AmplifierRequiredProps & Required<AmplifierOptionalProps>

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
}

const AmplifierContext = Generator(Amplifier)

const Volume = AmplifierContext.Consumer(
  ({ name, volume }) =>
    <div data-testid="volume">
      {name}'s amplifier goes up to {volume}
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
    expect(volume).toHaveTextContent("Nigel's amplifier goes up to 11")
  }
)
