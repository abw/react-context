import React      from 'react'
import CounterApp from './App2b.jsx'
import Counter    from './Counter.js'
import Controls   from './Controls.jsx'
import Count      from './Count.jsx'

export const App3c = (props) =>
  <CounterApp {...props}>
    <div className="surface border pad-a-4 bdr-1">
      <div className="flex space middle">
        <Counter.Children>
          {
            ({ count }) =>
              <div className={`${count == 11 ? 'red' : 'green'} x2 fgc-50`}>
                {count}
              </div>
          }
          {
            ({ setCount }) =>
              <button className="red" onClick={() => setCount(11)}>
                Go to Eleven
              </button>
          }
        </Counter.Children>
      </div>
      <Count/>
      <Controls/>
    </div>
  </CounterApp>

export default App3c