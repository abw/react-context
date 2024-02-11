import React    from 'react'
import Context  from './Counter.js'

export const App2b = ({
  children,
  ...props
}) =>
  <Context.Provider {...props}>
    <Context.Children>
      {children}
    </Context.Children>
  </Context.Provider>

export default App2b