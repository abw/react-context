import React    from 'react'
import App2b    from './App2b.jsx'
import Controls from './Controls.jsx'
import Count    from './Count.jsx'

export const App3b = (props) =>
  <App2b {...props}>
    {
      ({ count, setCount }) =>
        <div className="flex space">
          <div className={ count === 11 ? 'bignum red' : 'bignum green' }>
            {count}
          </div>
          <button onClick={() => setCount(11)}>
            Go to Eleven
          </button>
        </div>
    }
    <Count/>
    <Controls/>
  </App2b>

export default App3b