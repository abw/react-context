import { Generator, ContextType } from '@/lib/index'
{/* START */}
import { useState } from 'react'
import { CounterProps, CounterRenderProps } from './Types'
// PRETEND: import { Generator, ModelType } from '@abw/react-context'

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