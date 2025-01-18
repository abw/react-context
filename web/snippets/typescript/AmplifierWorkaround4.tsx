import { Context, WithRequiredFrom } from '@abw/react-context'

/* ...as before... */

class Amplifier extends Context<
  AmplifierProps,
  AmplifierState
> {
  config: WithRequiredFrom<AmplifierProps, typeof defaultProps>

  /* ...as before... */
}
