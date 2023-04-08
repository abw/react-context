import React    from 'react'
import Products from './Products.js'

const NotInBasket = ({Products, product}) =>
  <div>
    <p>
      You don&apos;t have any in your basket.
    </p>
    <div>
      <button
        onClick={() => Products.addProductToBasket(product.id)}
      >
        Add to basket
      </button>
    </div>
  </div>

export default Products.Consumer(NotInBasket)