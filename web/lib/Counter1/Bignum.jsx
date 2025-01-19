import React from 'react'
import Counter from './Counter.js'

const Bignum = () => {
  const { count } = Counter.Use()   // works, but not recommended
  return (
    <div className="x2">{count}</div>
  )
}

export default Bignum