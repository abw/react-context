import React from 'react'
import useCounter from './useCounter.jsx'

const Bignum = () => {
  const { count } = useCounter()
  return (
    <div className="x2">{count}</div>
  )
}

export default Bignum