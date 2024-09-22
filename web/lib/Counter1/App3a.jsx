import React    from 'react'
import App2a    from './App2a.jsx'
import Controls from './Controls.jsx'
import Bignum   from './Bignum.jsx'

export const App3a = () =>
  <App2a>
    <div className="flex space surface border pad-a-4 bdr-1">
      <Controls/>
      <Bignum/>
    </div>
  </App2a>

export default App3a