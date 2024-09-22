import React    from 'react'
import Context  from './Counter.js'

export const App2a = ({
  children,
  ...props
}) =>
  <Context.Provider {...props}>
    {children}
  </Context.Provider>

export default App2a