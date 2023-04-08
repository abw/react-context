import React    from 'react'
import Context  from './Context.js'
import Count    from './Count.jsx'
import Controls from './Controls.jsx'

// The Counter.Provider is a wrapper around the child components
// which automatically forwards the shared properties provided by
// the context component
export const App = (props) =>
  <Context.Provider {...props}>
    <Count/>
    <Controls/>
  </Context.Provider>

export default App

