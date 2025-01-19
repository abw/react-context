/* eslint-disable no-unused-vars */
{/* START */}
import React           from 'react'
import { useAuth }     from '../context/Auth.js'
import { useBasket }   from '../context/Basket.js'
import { useProducts } from '../context/Products.js'

const ExampleComponent = () => {
  const { Auth     } = useAuth()
  const { Basket   } = useBasket()
  const { Products } = useProducts()
  return (
    <div>
      {/* your code here */}
    </div>
  )
}

export default ExampleComponent