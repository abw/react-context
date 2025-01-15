import {  Context } from '@/lib/index'

class Products extends Context {
  /* START */
  addProductToBasket(id) {
    this.debug(`addProductToBasket(${id})`)
    const { productById, basket } = this.state
    const product = productById[id]
    const count   = (basket[id]?.count || 0) + 1
    const state   = {
      basket: {
        ...basket,
        [product.id]: { product, count }
      }
    }
    this.debug('Setting new state:', state)
    this.setState(state)
  }

  removeProductFromBasket(id) {
    this.debug(`removeProductFromBasket(${id})`)
    const basket = { ...this.state.basket }
    delete basket[id]
    this.setState({ basket })
  }

  emptyBasket() {
    this.debug('emptyBasket()')
    this.setState({ basket: { } })
  }

  quantityInBasket(id) {
    const item = this.state.basket[id]
    return item
      ? item.count
      : 0
  }
  /* END */
}

