import { Generator, Context } from '../../../lib/index.js'
{/* START */}
// PRETEND: import { Context, Generator } from '@abw/react-context'
import { sleep } from '@abw/badger-utils'

const sampleProducts = [
  { id: 'foo', name: 'The Foo Product', price: '12.99' },
  { id: 'bar', name: 'The Bar Product', price: '15.99' },
  { id: 'baz', name: 'The Baz Product', price: '18.99' },
]

class Products extends Context {
  static initialState = {
    ready:    false,
    loading:  false,
    products: [ ],
    basket:   { },
  }
  static debug       = false
  static debugPrefix = 'Products > '
  static debugColor  = 'rebeccapurple'
  static actions     = [
    'selectProduct',
    'addProductToBasket',
    'removeProductFromBasket',
    'quantityInBasket',
    'emptyBasket'
  ]

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts() {
    this.debug('loadProducts()')
    this.setState({ loading: 'Loading...' })

    // pretend we're loading the products index from an API call...
    sleep(1000).then(
      () => this.setState({
        ready:   true,
        loading: false,
        products: [ ...sampleProducts ],
        productById: sampleProducts.reduce(
          (byId, product) => {
            byId[product.id] = product
            return byId
          },
          { }
        )
      })
    )
  }

  selectProduct(id) {
    this.debug(`selectProduct(${id})`)
    const index = this.state.productById || { }
    const product = index[id]
    this.setState({ product })
  }

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

  //-----------------------------------------------------------------------------
  // Render
  //-----------------------------------------------------------------------------
  getRenderProps() {
    const context = this.getContext()
    const { products, product, basket } = context

    return {
      Products: context,
      products, product, basket
    }
  }
}

export default Generator(Products)