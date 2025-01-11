import React   from 'react'
import Counter from './Counter.js'

const Controls = ({inc, dec}) => {
  const { inc, dec } = Counter.Use()
  return (
    <div className="flex gap-2 brand">
      <button onClick={() => dec(10)}>-10</button>
      <button onClick={() => dec()}>-1</button>
      <button onClick={() => inc()}>+1</button>
      <button onClick={() => inc(10)}>+10</button>
    </div>
  )
}

export default Controls