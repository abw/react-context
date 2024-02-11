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

    <h2>Volume.js</h2>
    <p>
      Here&apos;s the code for the context module used by the above
      application.  The interesting part happens between lines 14 and 21.
      The <code>Generator</code> function is called on line 14 and the
      object generated is stored in the appropriately named{' '}
      <code>generated</code> variable.  In lines 16 to 19 we deconstruct that
      into separate variables, all of which are exported by name.  This also
      gives us the opportunity to create an alias for the <code>Use</code>{' '}
      component on line 18 so that it can be imported as <code>useVolume</code>.
      Then on line 21 we set the default export to be the <code>generated</code>{' '}
      object as usual.
    </p>

    <CodeBlock language="jsx" source={VolumeSrc} caption="Volume.js"/>

    <h2>App.jsx</h2>
    <p>
      Now our application code can import <code>Provider</code> as a named
      import.
    </p>

    <CodeBlock language="jsx" source={AppSrc} caption="App.jsx"/>

    <h2>Other Components</h2>
    <p>
      Our other components can import <code>Consumer</code> as a named import.
    </p>

    <CodeBlock language="jsx" source={SliderSrc} caption="Slider.jsx"/>

    <CodeBlock language="jsx" source={ButtonsSrc} caption="Buttons.jsx"/>

    <p>
      Or we can access the context using the <code>useVolume</code> named import.
    </p>

    <CodeBlock language="jsx" source={DisplaySrc} caption="Display.jsx"/>

  </div>

export default Streamlining

