import React    from 'react'
import App2b    from './App2b.jsx'
import Context  from './Counter.js'
import Controls from './Controls.jsx'
import Count    from './Count.jsx'

export const App3c = (props) =>
  <App2b {...props}>
    <div className="surface border pad-a-4 bdr-1">
      <div className="flex space middle">
        <Context.Children>
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
        </Context.Children>
      </div>
      <Count/>
      <Controls/>
    </div>
  </App2b>

export default App3c