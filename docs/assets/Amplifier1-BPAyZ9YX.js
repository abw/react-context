const n=`import { Context, ContextProps, ContextConstructorProps } from '@/lib/index'
/* START */
// PRETEND: import { Context, ContextProps, ContextConstructorProps } from '@abw/react-context'

type AmplifierProps = ContextProps<{
  initialVolume?: number
}>
type AmplifierState = {
  volume: number
}
type AmplifierConstructorProps = ContextConstructorProps<
  AmplifierProps,
  AmplifierState
>

class Amplifier extends Context<
  AmplifierProps,
  AmplifierState
> {
  static defaultProps = {
    initialVolume: 10,
  }
  constructor(props: AmplifierConstructorProps) {
    super(props)
    this.state = {
      // Type 'number | undefined' is not assignable to type 'number'.
      // Type 'undefined' is not assignable to type 'number'.ts(2322)
      volume: this.props.initialVolume
    }
  }
}
`;export{n as default};
