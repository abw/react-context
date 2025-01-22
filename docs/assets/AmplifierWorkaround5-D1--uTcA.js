const n=`import { Context, WithRequiredFrom } from '@abw/react-context'

/* ...as before... */

class Amplifier extends Context<
  AmplifierProps,
  AmplifierState
> {
  /* ...as before... */

  getRenderProps() {
    return {
      ...this.config,
      ...this.state
  }
}
`;export{n as default};
