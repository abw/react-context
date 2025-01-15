import React   from 'react'
import Counter from './Counter.js'

const Controls = ({ inc, dec }) =>
  <div className="flex gap-2 brand">
    <button onClick={() => dec(10)}>-10</button>
    <button onClick={() => dec()}>-1</button>
    <button onClick={() => inc()}>+1</button>
    <button onClick={() => inc(10)}>+10</button>
  </div>

export default Counter.Consumer(Controls)