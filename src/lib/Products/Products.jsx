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
  }
  static actions     = 'selectProduct'
  static debug       = false
  static debugPrefix = 'Products > '
  static debugColor  = 'rebeccapurple'

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts() {
    this.debug('loadProducts()')
    this.setState({ loading: 'Loading...' })

    // pretend we're loading the products index from an API call...
    sleep(2000).then(
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

  //-----------------------------------------------------------------------------
  // Render
  //-----------------------------------------------------------------------------
  getRenderProps() {
    const context = this.getContext()

    return {
      Products: context,
      products: context.products,
      product:  context.product,
    }
  }
}

export default Generator(Products)