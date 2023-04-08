import React    from 'react'
import Products from './Products.js'

const List = ({ Products, products, product }) =>
  <>
    <p>
      We have {products?.length} awesome products!
    </p>
    { products.map(
      p =>
        <button
          key={p.id}
          onClick={() => Products.selectProduct(p.id)}
          className={p.id === product?.id ? 'green' : 'blue'}
        >
          {p.name} ({Products.quantityInBasket(p.id)})
        </button>
    )}
  </>

export default Products.Consumer(List)