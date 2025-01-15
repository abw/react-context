import React from 'react'
import { DebugMethod, Generator, PropsWithRender } from '@/lib/index'
import { CounterProps, CounterState } from './Types'
import { debugFunction } from '@/lib/Utils'

export type CounterRenderProps = {
  count: number
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

class Counter extends React.Component<
  PropsWithRender<CounterProps, CounterRenderProps>,
  CounterState
> {
  static debug        = true
  static debugPrefix  = undefined
  static debugColor   = undefined

  debug: DebugMethod

  constructor(props: PropsWithRender<CounterProps, CounterRenderProps>) {
    super(props)
    const statics     = this.constructor as typeof Counter
    const debug       = statics.debug
    const debugPrefix = statics.debugPrefix
    const debugColor  = statics.debugPrefix
    this.debug = debugFunction(props, { debug, debugPrefix, debugColor })
    this.state = {
      count: this.props.initialCount ?? 0
    }
  }

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