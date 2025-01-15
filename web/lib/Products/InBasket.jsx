import React    from 'react'
import Products from './Products.js'

const InBasket = ({ Products, product, quantity }) =>
  <div>
    <p>
      You have {quantity} in your basket.
    </p>
    <div className="flex gap-2">
      <button
        onClick={() => Products.addProductToBasket(product.id)}
        className="green"
      >
        Add another one
      </button>
      <button
        onClick={() => Products.removeProductFromBasket(product.id)}
        className="orange"
      >
        Remove from basket
      </button>
    </div>
  </div>

export default Products.Consumer(InBasket)