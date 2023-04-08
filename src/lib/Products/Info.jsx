import React    from 'react'
import Basket   from './Basket.jsx'
import Products from './Products.js'

const Info = ({ product }) =>
  <div>
    { product
      ? <div className="product">
          <h3>{product.name}</h3>
          <div className="large price">£{product.price}</div>
          <Basket/>
        </div>
      : <div className="prompt">
          Click on a button to select a product.
        </div>
    }
  </div>

export default Products.Consumer(Info)