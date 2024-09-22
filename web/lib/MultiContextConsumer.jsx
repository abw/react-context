/* eslint-disable indent */
/* eslint-disable no-unused-vars */
{/* START */}
import React    from 'react'
import Auth     from '../context/Auth.js'
import Basket   from '../context/Basket.js'
import Products from '../context/Products.js'

const ExampleComponent = ({ Auth, Basket, Products }) =>
  <div>
    {/* your code here */}
  </div>

export default
  Auth.Consumer(
    Basket.Consumer(
      Products.Consumer(
        ExampleComponent
      )
    )
  )