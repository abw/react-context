import React      from 'react'
import CounterApp from './App2a.jsx'
import Controls   from './Controls.jsx'
import Bignum     from './Bignum.jsx'

export const App3a = () =>
  <CounterApp>
    <div className="flex space surface border pad-a-4 bdr-1">
      <Controls/>
      <Bignum/>
    </div>
  </CounterApp>

export default App3a