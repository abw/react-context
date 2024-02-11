import React    from 'react'
import App2a    from './App2a.jsx'
import Controls from './Controls.jsx'
import Bignum   from './Bignum.jsx'

export const App3a = () =>
  <App2a>
    <Bignum/>
    <Controls/>
  </App2a>

export default App3a