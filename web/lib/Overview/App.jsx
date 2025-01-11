import React    from 'react'
import Counter  from './Counter.js'
import Count    from './Count.jsx'
import Controls from './Controls.jsx'

export const App = () =>
  <Counter.Provider>
    <Count/>
    <Controls/>
  </Counter.Provider>

export default App