import React        from 'react'
import Slider       from './Slider.jsx'
import Buttons      from './Buttons.jsx'
import Display      from './Display.jsx'
import { Provider } from './Volume.js'

export const App = (props) =>
  <Provider {...props}>
    <div className="flex space">
      <div>
        <Slider/>
        <Buttons/>
      </div>
      <Display/>
    </div>
  </Provider>

export default App