import React    from 'react'
import Products from './Products.js'

const Layout = ({Products, children}) =>
  <div className="box">
    <h2>Peruse Our Products</h2>
    { Products.ready
      ? children
      : 'Loading products... (not really, just pretending)'
    }
  </div>

export default Products.Consumer(Layout)