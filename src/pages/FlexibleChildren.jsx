import React from 'react'
// import App2   from '../lib/Counter1/App2.jsx'
import App2aSrc from '../lib/Counter1/App2a.jsx?raw'
import App2bSrc from '../lib/Counter1/App2b.jsx?raw'
import App3a   from '../lib/Counter1/App3a.jsx'
import App3aSrc from '../lib/Counter1/App3a.jsx?raw'
import App3b   from '../lib/Counter1/App3b.jsx'
import App3bSrc from '../lib/Counter1/App3b.jsx?raw'
import App3c   from '../lib/Counter1/App3c.jsx'
import App3cSrc from '../lib/Counter1/App3c.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'

const FlexibleChildren = () =>
  <div>
    <h1>Flexible Children</h1>
    <p>
      You might want to create an app container that implements the context
      provider and renders any contained children.  The usual approach would
      be like this.
    </p>
    <CodeBlock language="jsx" source={App2aSrc} caption="App2a.jsx"/>

    <p>
      Now we can use this generic <code>App2a.jsx</code> component to build
      a component which has some custom content.
    </p>
    <CodeBlock language="jsx" source={App3aSrc} caption="App3a.jsx"/>
    <div className="box">
      <App3a/>
    </div>

    <p>
      For a bit more flexibility you can wrap the <code>children</code> elements
      in the <code>Children</code> component returned by the context generator.
    </p>
    <CodeBlock language="jsx" source={App2bSrc} caption="App2b.jsx"/>

    <p>
      Everything works the same as before, with one useful addition.  If you
      define a function as an immediate child element then it will be called
      with all the context values.  This can be particularly useful for
      debugging, for example, where you want to access the context but may
      not want to write a dedicated component to do so.
    </p>
    <CodeBlock language="jsx" source={App3bSrc} caption="App3b.jsx"/>
    <div className="box">
      <App3b/>
    </div>

    <p>
      Note that this only works if a function is an <i>immediate</i> child
      of the app container.  If you want to include functions nested within
      other elements then you should enclose them in the <code>Children</code>{' '}
      component.
    </p>
    <CodeBlock language="jsx" source={App3cSrc} caption="App3c.jsx"/>
    <div className="box">
      <App3c/>
    </div>
  </div>

export default FlexibleChildren

