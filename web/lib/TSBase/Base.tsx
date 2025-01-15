import React from 'react'
import { DebugMethod, Generator } from '@/lib/index'
import { debugFunction } from '@/lib/Utils'

type Hash = Record<string, unknown>

export type Render<RenderProps> = {
  render: (props: RenderProps) => JSX.Element
}

export type PropsWithRender<Props, RenderProps> = Props & Render<RenderProps>

class Context<
  Props = { },
  State = { },
  Actions = { },
> extends React.Component<
  PropsWithRender<Props, Props & State & Actions>,
  State
> {
  // type ComboProps = Props & State & Actions

  static debug        = true
  static debugPrefix  = undefined
  static debugColor   = undefined

  debug: DebugMethod

  constructor(props: PropsWithRender<Props, Props & State & Actions>) {
    super(props)
    const statics     = this.constructor as typeof Context
    const debug       = statics.debug
    const debugPrefix = statics.debugPrefix
    const debugColor  = statics.debugPrefix
    this.debug = debugFunction(props, { debug, debugPrefix, debugColor })
    this.state = {
      // count: this.props.initialCount ?? 0
    }
  }
  getContext(): Props & State & Actions {
    return {
      ...this.props,
      ...this.state,
      // TODO
    }
  }
  getRenderProps(): Props & State & Actions {
    return this.getContext()
  }
  render() {
    return this.props.render(
      this.getRenderProps()
    )
  }
  //render() {
  //  return this.props.render({
  //    ...this.props,        // should remove render
  //    ...this.state,
  //    inc: this.inc.bind(this),
  //    dec: this.dec.bind(this)
  //  })
  //}
}

export default Context
// export default Generator(Context)