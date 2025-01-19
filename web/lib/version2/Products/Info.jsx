import React    from 'react'
import Basket   from './Basket.jsx'
import Products from './Products.js'

const Info = ({ product }) =>
  <div>
    { product
      ? <div className="grey surface-5 border bdr-1 pad-a-4 mar-t-4">
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