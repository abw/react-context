import React    from 'react'
import Outer    from './Outer.jsx'
import Inner    from './Inner.jsx'
import Setter   from './Setter.jsx'
import Data     from './Data.jsx'

export const App = () =>
  <Outer.Provider>
    <h2>Outer</h2>
    <Data/>
    <Setter/>

    <h2 className="mar-t-4">Inner: one</h2>
    <Inner.Provider name="one">
      <Data/>
      <Setter/>
    </Inner.Provider>

    <h2 className="mar-t-4">Inner: two</h2>
    <Inner.Provider name="two">
      <Data/>
      <Setter/>
    </Inner.Provider>
  </Outer.Provider>

export default App