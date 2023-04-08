import React from 'react'
import Counter from './Counter.js'

const Bignum = () => {
  const { count } = Counter.Use()
  return (
    <div className="bignum">{count}</div>
  )
}

export default Bignum