import React from 'react'
import { actionMethods, debugFunction, prepareState } from './Utils'
import { ActionMethods, DebugConfigOption, DebugMethod, PropsWithRender } from './types'

export class Context<
  Props extends object = { },
  State extends object = { },
  RenderProps = Props
> extends React.Component<
  PropsWithRender<Props, RenderProps>,
  State
> {
  static initialState = { }
  static initialProps = { }
  static actions: string | string[] = [ ]
  static debug: boolean = false
  static debugPrefix: DebugConfigOption = undefined
  static debugColor: DebugConfigOption  = undefined

  debug: DebugMethod
  actions: ActionMethods

  // https://github.com/microsoft/TypeScript/issues/3841#issuecomment-2381594311
  declare ['constructor']: typeof Context

  // @ts-expect-error  This is too painful with Typescript
  constructor(props) {
    super(props)
    const statics     = this.constructor//  as T
    const debug       = statics.debug
    const debugPrefix = statics.debugPrefix
    const debugColor  = statics.debugColor

    // add debug() method if static debug flag or debug prop is set
    this.debug = debugFunction(props, { debug, debugPrefix, debugColor })

    // define initial state
    this.state = prepareState(
      statics.initialState,
      statics.initialProps,
      props
    ) as State

    // expose any methods as callable functions in this.handlers
    this.actions = actionMethods(this, statics.actions)
  }

  getContext(): RenderProps {
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
