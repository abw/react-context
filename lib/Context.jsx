import React from 'react'
import { actionMethods, prepareState } from './Utils.js'

export class Context extends React.Component {
  static initialState = { }
  static initialProps = { }
  static actions      = [ ]

  constructor(props) {
    super(props)
    const statics = this.constructor

    // add debug() method if static debug flag or debug prop is set
    this.debug = (statics.debug || props.debug)
      ? statics.debugPrefix
        ? (format, ...args) => console.log(
            '%c' + statics.debugPrefix + '%c' + format,
            `color: ${statics.debugColor}`,
            'color:black', ...args
          )
        : console.log.bind(console)
      : () => (undefined)

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
