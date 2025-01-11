import React from 'react'
import { actionMethods, debugFunction, prepareState } from './Utils'
import { ActionMethods, DebugMethod } from './types'

// <ModelProps, RenderProps extends object>(

export class Context<
  // T extends typeof Context = typeof Context,
  Props = Record<string, unknown>
> extends React.Component {
  static initialState = { }
  static initialProps = { }
  static actions      = [ ]
  static debug        = false
  static debugPrefix  = undefined
  static debugColor   = undefined

  debug: DebugMethod
  actions: ActionMethods

  // https://github.com/microsoft/TypeScript/issues/3841#issuecomment-2381594311
  declare ['constructor']: typeof Context

  constructor(props: Props) {
    super(props)
    const statics     = this.constructor//  as T
    const debug       = statics.debug
    const debugPrefix = statics.debugPrefix
    const debugColor  = statics.debugPrefix

    // add debug() method if static debug flag or debug prop is set
    this.debug = debugFunction(props, { debug, debugPrefix, debugColor })

    // define initial state
    this.state = prepareState(
      statics.initialState,
      statics.initialProps,
      props
    )

    // expose any methods as callable functions in this.handlers
    this.actions = actionMethods(this, statics.actions)
  }

  getContext() {
    return {
      ...this.props,    // properties passed to the context
      ...this.state,    // internal state
      ...this.actions,  // callable action functions mapped to methods
    }
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
