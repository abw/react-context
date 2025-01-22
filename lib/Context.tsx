import React from 'react'
import { actionMethods, debugFunction, prepareState } from './Utils'
import { ContextDebugConfigOption, ContextDebugOptions, DebugMethod, PropsWithRender } from './types'

export class Context<
  Props extends ContextDebugOptions = ContextDebugOptions,
  State extends Record<string, unknown> = { },
  Actions extends Record<string, unknown> = { },
  RenderProps = Props & State & Actions
> extends React.Component<
  PropsWithRender<Props, RenderProps>,
  State
> {
  static initialState = { }
  static initialProps = { }
  static actions: string | string[] = [ ]
  static debug: boolean = false
  static debugPrefix: ContextDebugConfigOption = undefined
  static debugColor:  ContextDebugConfigOption = undefined

  debug: DebugMethod
  actions: Actions

  // https://github.com/microsoft/TypeScript/issues/3841#issuecomment-2381594311
  declare ['constructor']: typeof Context

  constructor(props: PropsWithRender<Props, RenderProps>) {
    super(props)
    const statics     = this.constructor
    const debug       = statics.debug
    const debugPrefix = statics.debugPrefix
    const debugColor  = statics.debugColor

    // add debug() method if static debug flag or debug prop is set
    this.debug = debugFunction(
      props,
      { debug, debugPrefix, debugColor }
    )

    // define initial state
    this.state = prepareState(
      statics.initialState,
      statics.initialProps,
      props
    ) as State

    // expose any methods as callable functions in this.actions
    this.actions = this.initActions(statics.actions)
  }

  initActions(names: string | string[]): Actions {
    // This is the type unsafe version for backwards compatibility
    return actionMethods(this, names) as Actions
  }

  getContext(): RenderProps {
    // We need to assert that this has the RenderProps type because
    // this.actions isn't type safe for backwards compatibility.
    return {
      ...this.props,    // properties passed to the context
      ...this.state,    // internal state
      ...this.actions,  // callable action functions mapped to methods
    } as RenderProps
  }

  getRenderProps() {
    return this.getContext()
  }

  render() {
    return this.props.render(
      this.getRenderProps()
    )
  }
}

export default Context

