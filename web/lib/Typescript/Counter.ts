import { Generator, ContextType } from '@/lib/index'
{/* START */}
import { useState } from 'react'
// PRETEND: import { Generator, ContextType } from '@abw/react-context'
import { CounterProps, CounterRenderProps } from './Types'

const Counter: ContextType<CounterProps, CounterRenderProps> = (
  {
    initialCount=0,
    render
  }
) => {
  const [count, setCount] = useState(initialCount)
  const inc = (n=1) => setCount(count + n)
  const dec = (n=1) => setCount(count - n)

  return render({
    count, inc, dec, setCount
  })
}

export default Generator(Counter)