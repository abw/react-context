import React    from 'react'
import Outer    from './Outer.jsx'
import Inner    from './Inner.jsx'
import Setter   from './Setter.jsx'
import Data     from './Data.jsx'

export const App = () =>
  <Outer.Provider>
    <div className="surface pad-4 border bdr-3">
      <h2>Outer</h2>
      <Data/>
      <Setter/>
    </div>

    <div className="surface pad-4 border bdr-3 mar-t-4">
      <h2>Inner: one</h2>
      <Inner.Provider name="one">
        <Data/>
        <Setter/>
      </Inner.Provider>
    </div>

    <div className="surface pad-4 border bdr-3 mar-t-4">
      <h2>Inner: two</h2>
      <Inner.Provider name="two">
        <Data/>
        <Setter/>
      </Inner.Provider>
    </div>
  </Outer.Provider>

export default App