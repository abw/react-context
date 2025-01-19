import React    from 'react'
import Products from './Products.js'

const Layout = ({Products, children}) =>
  <div className="brand surface-5 border bdr-2 pad-4">
    <h2>Peruse Our Products</h2>
    { Products.ready
      ? children
      : 'Loading products... (not really, just pretending)'
    }
  </div>

export default Products.Consumer(Layout)