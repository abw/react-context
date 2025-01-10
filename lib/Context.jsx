import React from 'react'
import { actionMethods, debugFunction, prepareState } from './Utils'

export class Context extends React.Component {
  static initialState = { }
  static initialProps = { }
  static actions      = [ ]

  constructor(props) {
    super(props)
    const statics = this.constructor

    // add debug() method if static debug flag or debug prop is set
    this.debug = debugFunction(props, statics)

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
