import React  from 'react'
import useProducts from './useProducts.jsx'

const Info = () => {
  const { product } = useProducts()
  return product
    ? <div className="product">
        <h3>{product.name}</h3>
        <div className="large price">£{product.price}</div>
      </div>
    : <div className="prompt">
        Click on a button to select a product.
      </div>
}

export default Info