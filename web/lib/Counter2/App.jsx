import React    from 'react'
import Counter  from './Counter.js'
import Count    from './Count.jsx'
import Controls from './Controls.jsx'
import Bignum   from './Bignum.jsx'

export const App = (props) =>
  <Counter.Provider {...props}>
    <div className="flex space surface border pad-a-4 bdr-1">
      <div>
        <Count/>
        <Controls/>
      </div>
      <Bignum/>
    </div>
  </Counter.Provider>

export default App