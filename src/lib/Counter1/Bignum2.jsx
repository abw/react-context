import React from 'react'
import useCounter from './useCounter.jsx'

const Bignum = () => {
  const { count } = useCounter()
  return (
    <div className="bignum">{count}</div>
  )
}

export default Bignum