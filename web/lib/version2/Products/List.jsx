import React    from 'react'
import Products from './Products.js'

const List = ({ Products, products, product }) =>
  <>
    <p>
      We have {products?.length} awesome products!
    </p>
    <div className="flex gap-2 mar-b-2">
      { products.map(
        p =>
          <button
            key={p.id}
            onClick={() => Products.selectProduct(p.id)}
            className={p.id === product?.id ? 'blue' : 'grey'}
          >
            {p.name} ({Products.quantityInBasket(p.id)})
          </button>
      )}
    </div>
  </>

export default Products.Consumer(List)