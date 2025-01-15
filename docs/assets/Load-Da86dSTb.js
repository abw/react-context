const n=`import { Context } from '@/lib/index'
import { sleep } from '@abw/badger-utils'

class Products extends Context {
  /* START */
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
  /* END */
}
`;export{n as default};
