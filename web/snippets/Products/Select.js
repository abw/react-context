import { Context } from '@/lib/index'

class Products extends Context {
  /* START */
  selectProduct(id) {
    this.debug(`selectProduct(${id})`)
    const index = this.state.productById || { }
    const product = index[id]
    this.setState({ product })
  }
  /* END */
}
