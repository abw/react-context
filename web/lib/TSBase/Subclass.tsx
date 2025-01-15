// import React from 'react'
import { Generator } from '@/lib/index'
import Base from './Base'
// import { CounterProps, CounterRenderProps, CounterState } from './Types'

export type CounterProps = {
  initialCount?: number
}

export type CounterState = {
  count: number
}

export type CounterActions = {
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

class Counter extends Base<
  CounterProps,
  CounterState,
  CounterActions
> {
  static debug        = true
  static debugPrefix  = undefined
  static debugColor   = undefined

  inc(n=1) {
    this.debug(`inc(${n})`)
    this.setState({ count: this.state.count + n })
  }
  dec(n=1) {
    this.debug(`dec(${n})`)
    this.setState({ count: this.state.count - n })
  }
  render() {
    return this.props.render({
      ...this.props,        // should remove render
      ...this.state,
      inc: this.inc.bind(this),
      dec: this.dec.bind(this)
    })
  }
}

export default Generator(Counter)