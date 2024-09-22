import React       from 'react'
import useProducts from './useProducts.jsx'
import NotInBasket from './NotInBasket.jsx'
import InBasket    from './InBasket.jsx'

const Basket = () => {
  const { Products, product, basket } = useProducts()
  const quantity = Products.quantityInBasket(product.id)
  return (
    <div className="flex space bottom">
      { quantity
        ? <InBasket quantity={quantity}/>
        : <NotInBasket/>
      }
      { Object.keys(basket).length
        ? <button
            onClick={Products.emptyBasket}
            className="red"
          >
            Empty basket
          </button>
        : <div>Basket is empty</div>
      }
    </div>
  )
}

export default Basket