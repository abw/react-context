import React   from 'react'
import Counter from './Counter.js'

const Controls = ({inc, dec}) => <div>
  <button onClick={() => dec(10)}>-10</button>
  <button onClick={() => dec()}>-1</button>
  <button onClick={() => inc()}>+1</button>
  <button onClick={() => inc(10)}>+10</button>
</div>

export default Counter.Consumer(Controls)