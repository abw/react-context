import { Context, Generator } from '@/lib/index'

{/* START */}
// PRETEND: import { Context, Generator } from '@abw/react-context'

class Counter extends Context {
  static initialState = {
    count: 0,
  }
  static initialProps = {
    count: 'initialCount',
  }
  static actions     = 'inc dec'
  static debug       = false
  static debugPrefix = 'Counter > '
  static debugColor  = 'orangered'

  inc(n=1) {
    this.debug(`inc(${n})`)
    this.setState({ count: this.state.count + n })
  }
  dec(n=1) {
    this.debug(`dec(${n})`)
    this.setState({ count: this.state.count - n })
  }
}

export default Generator(Counter)