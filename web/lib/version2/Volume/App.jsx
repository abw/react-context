import React        from 'react'
import Slider       from './Slider.jsx'
import Buttons      from './Buttons.jsx'
import Display      from './Display.jsx'
import { Provider } from './Volume.js'

export const App = (props) =>
  <Provider {...props}>
    <div className="surface-5 pad-4 border bdr-1 flex space">
      <div className="grid-1 gap-4">
        <Slider/>
        <Buttons/>
      </div>
      <Display/>
    </div>
  </Provider>

export default App