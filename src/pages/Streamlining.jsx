import React  from 'react'
import App    from '../lib/Volume/App.jsx'
import AppSrc from '../lib/Volume/App.jsx?raw'
import VolumeSrc from '../lib/Volume/Volume.js?raw'
import ButtonsSrc from '../lib/Volume/Buttons.jsx?raw'
import SliderSrc from '../lib/Volume/Slider.jsx?raw'
import DisplaySrc from '../lib/Volume/Display.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'

const Streamlining = () =>
  <div>
    <h1>Streamlining Exports</h1>
    <p>
      You may find it a bit cumbersome writing things like{' '}
      <code>Products.Provider</code> and <code>Products.Consumer</code>.
      I know I do.  If you need that little extra push over the cliff you
      can streamline the exports from your context module to allow the
      different components to be imported by name.  It&apos;s one louder.
    </p>
    <App/>

    <p>
      Here&apos;s the code for the context module used by the above
      application.  The interesting part happens between lines 14 and 16.
      The <code>Generator</code> function is called in line 14 and the
      object generated is stored in the appropriately named{' '}
      <code>generated</code> variable.  In line 15 we deconstruct that into
      separate variables, all of which are exported by name.  This also gives
      us the opportunity to create an alias for the <code>Use</code> component
      so that it can be imported as <code>useVolume</code>.  Then in line 16
      we set the default export to be the <code>generated</code> object as
      usual.
    </p>

    <h3 className="filename">Volume.js</h3>
    <CodeBlock language="jsx" source={VolumeSrc}/>

    <p>
      Now our application code can import <code>Provider</code> as a named
      import.
    </p>

    <h3 className="filename">App.jsx</h3>
    <CodeBlock language="jsx" source={AppSrc}/>

    <p>
      Our other components can import <code>Consumer</code> as a named import.
    </p>

    <h3 className="filename">Slider.jsx</h3>
    <CodeBlock language="jsx" source={SliderSrc}/>

    <h3 className="filename">Buttons.jsx</h3>
    <CodeBlock language="jsx" source={ButtonsSrc}/>

    <p>
      Or we can access the context using the <code>useVolume</code> named import.
    </p>

    <h3 className="filename">Display.jsx</h3>
    <CodeBlock language="jsx" source={DisplaySrc}/>

  </div>

export default Streamlining

