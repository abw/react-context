import React      from 'react'
import CounterApp from './App2b.jsx'
import Controls   from './Controls.jsx'
import Count      from './Count.jsx'

export const App3b = (props) =>
  <div className="surface border pad-a-4 bdr-1">
    <CounterApp {...props}>
      {
        ({ count, setCount }) =>
          <div className="flex space">
            <div className={`${count == 11 ? 'red' : 'green'} x2 fgc-50`}>
              {count}
            </div>
            <button className="red" onClick={() => setCount(11)}>
              Go to Eleven
            </button>
          </div>
      }
      <Count/>
      <Controls/>
    </CounterApp>
  </div>

export default App3b