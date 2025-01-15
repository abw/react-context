import { Context } from '@/lib/index'

class Products extends Context {
  /* START */
  getRenderProps() {
    const context = this.getContext()
    const { products, product, basket } = context

    return {
      Products: context,
      products, product, basket
    }
  }
  /* END */
}

