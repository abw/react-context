import React    from 'react'
import App2b    from './App2b.jsx'
import Context  from './Counter.js'
import Controls from './Controls.jsx'
import Count    from './Count.jsx'

export const App3b = (props) =>
  <App2b {...props}>
    <div className="flex space middle">
      <Context.Children>
        {
          ({ count }) =>
            <div className={ count === 11 ? 'bignum red' : 'bignum green' }>
              {count}
            </div>
        }
        <Controls/>
        {
          ({ setCount }) =>
            <button onClick={() => setCount(11)}>
              Go to Eleven
            </button>
        }
      </Context.Children>
    </div>
    <Count/>
  </App2b>

export default App3b