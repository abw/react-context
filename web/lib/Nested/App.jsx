import React    from 'react'
import Outer    from './Outer.jsx'
import Inner    from './Inner.jsx'
import Setter   from './Setter.jsx'
import Data     from './Data.jsx'

export const App = () =>
  <Outer.Provider>
    <div className="surface-5 pad-4 border bdr1">
      <h2>Outer</h2>
      <Data/>
      <Setter/>
    </div>

    <div className="surface-5 pad-4 border bdr1 mar-t-4">
      <h2>Inner: one</h2>
      <Inner.Provider name="one">
        <Data/>
        <Setter/>
      </Inner.Provider>
    </div>

    <div className="surface-5 pad-4 border bdr1 mar-t-4">
      <h2>Inner: two</h2>
      <Inner.Provider name="two">
        <Data/>
        <Setter/>
      </Inner.Provider>
    </div>
  </Outer.Provider>

export default App