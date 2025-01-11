{/* START */}
import { useState } from 'react'

const Counter = ({ initialCount=0 }) => {
  const [count, setCount] = useState(initialCount)
  const inc = (n=1) => setCount(count + n)
  const dec = (n=1) => setCount(count - n)

  return (
    <>
      <p>
        The current count is {count}
      </p>
      <div className="flex gap-2 brand">
        <button onClick={() => dec(10)}>-10</button>
        <button onClick={() => dec()}>-1</button>
        <button onClick={() => inc()}>+1</button>
        <button onClick={() => inc(10)}>+10</button>
      </div>
    </>
  )
}

export default Counter