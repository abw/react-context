import React   from 'react'
import Counter from './Counter.js'

const Count = ({count}) =>
  <p>
    The current count is {count}
  </p>

export default Counter.Consumer(Count)