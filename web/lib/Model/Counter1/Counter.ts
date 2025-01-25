import Model from '@/lib/Model'
/* START */
import { useState } from 'react'
// PRETEND: import { Model } from '@abw/react-context'

const Counter = ({
  initialCount=0,
}) => {
  const [count, setCount] = useState(initialCount)
  const inc = (n=1) => setCount(count + n)
  const dec = (n=1) => setCount(count - n)

  return {
    count, setCount, inc, dec
  }
}

export const { Provider, Consumer } = Model(Counter)
