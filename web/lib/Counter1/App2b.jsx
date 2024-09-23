import React    from 'react'
import Counter  from './Counter.js'

export const App2b = ({
  children,
  ...props
}) =>
  <Counter.Provider {...props}>
    <Counter.Children>
      {children}
    </Counter.Children>
  </Counter.Provider>

export default App2b