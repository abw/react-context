import React    from 'react'
import App2     from './App2.jsx'
import Count    from './Count.jsx'
import Controls from './Controls.jsx'
import Bignum   from './Bignum.jsx'

export const App3 = (props) =>
  <App2 {...props}>
    <div className="flex space">
      <div>
        <Count/>
        <Controls/>
      </div>
      <Bignum/>
    </div>
    {
      ({ count }) => <p>Count is {count}</p>
    }
  </App2>

export default App3