import { Generator } from '../../../lib/index.js'
{/* START */}
import { useState } from 'react'
// PRETEND: import { Generator } from '@abw/react-context'

const Counter = ({initialCount=0, render}) => {
  const [count, setCount] = useState(initialCount)
  const inc = (n=1) => setCount(count + n)
  const dec = (n=1) => setCount(count + n)

  return render({
    count, inc, dec
  })
}

export default Generator(Counter)