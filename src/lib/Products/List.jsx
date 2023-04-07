import React  from 'react'
import Products from './Products.jsx'

const List = ({ Products, products }) =>
  <>
    <p>
      We have {products?.length} awesome products!
    </p>
    { products.map(
      product =>
        <button
          key={product.id}
          onClick={() => Products.selectProduct(product.id)}
        >
          {product.name}
        </button>
    )}
  </>

export default Products.Consumer(List)