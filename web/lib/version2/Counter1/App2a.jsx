import React    from 'react'
import Counter  from './Counter.js'

export const App2a = ({
  children,
  ...props
}) =>
  <Counter.Provider {...props}>
    {children}
  </Counter.Provider>

export default App2a