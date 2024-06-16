import React from 'react'
import App   from '../lib/Nested/App.jsx'
import AppSrc from '../lib/Nested/App.jsx?raw'
import ContextSrc from '../lib/Nested/Context.js?raw'
import OuterSrc from '../lib/Nested/Outer.jsx?raw'
import InnerSrc from '../lib/Nested/Inner.jsx?raw'
import DataSrc from '../lib/Nested/Data.jsx?raw'
import SetterSrc from '../lib/Nested/Setter.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'

const NestedDemo = () =>
  <div>
    <h1>Nested Demo</h1>
    <p>
      It&apos;s possible to reuse the same React Context object in different
      generated contexts. Here&apos;s a demo showing how you can do
      that.
    </p>
    <div className="box">
      <App/>
    </div>

    <h2>App.jsx</h2>
    <p>
      This is what our application code <code>App.jsx</code> looks like.
    </p>
    <CodeBlock language="jsx" source={AppSrc} caption="App.jsx"/>

    <h2>Context.js</h2>
    <p>
      The first thing we have to do is create a React Context object that
      we can share.
    </p>
    <CodeBlock language="jsx" source={ContextSrc} caption="Context.js"/>

    <h2>Outer.jsx</h2>
    <p>
      The outer context maintains a <code>data</code> object using{' '}
      <code>React.useState</code> and implements a <code>setItem</code> function
      to set the value of an item in that <code>data</code> object.
    </p>
    <p>
      The call to <code>Generator</code> on line 18 passes the <code>Context</code>
      object that we import from <code>Context.js</code> as the third argument.
      The second argument is the <code>defaultState</code> which we can
      set to an empty object.
    </p>
    <CodeBlock language="jsx" source={OuterSrc} caption="Outer.jsx"/>

    <h2>Inner.jsx</h2>
    <p>
      The inner context works much the same with a couple of differences.
      One line 8 it accesses the <code>setItem()</code> function provided by
      the <code>Outer</code> context by making a call to <code>Outer.Use()</code>.
      It aliases that to <code>setOuterItem</code>.  Then in its own{' '}
      <code>setItem()</code> function it updates its own <code>data</code> object
      and additionally calls the <code>setOuterItem()</code> function to set
      a data item in the outer context using the <code>name</code> defined
      as a property.
    </p>
    <p>
      In the example above we create two nested <code>Inner</code> contexts,
      the first having the <code>name</code> set to <code>one</code> and the
      second being <code>two</code>.
    </p>
    <CodeBlock language="jsx" source={InnerSrc} caption="Inner.jsx"/>

    <h2>Data.jsx</h2>
    <p>
      The <code>Data</code> component simply displays the stringified
      data in the context.
    </p>
    <CodeBlock language="jsx" source={DataSrc} caption="Data.jsx"/>

    <h2>Setter.jsx</h2>
    <p>
      The <code>Setter</code> component implements some buttons that call
      the <code>setItem()</code> function when clicked.
    </p>
    <CodeBlock language="jsx" source={SetterSrc} caption="Setter.jsx"/>

    <p>
      Both the <code>Data</code> and <code>Setter</code> components
      are consumers of the <code>Outer</code> context (line 10 of <code>Data.jsx</code>{' '}
      and line 12 of <code>Setter.jsx</code>).
    </p>
    <p>
      However, both the <code>Outer</code> and <code>Inner</code> contexts
      share the same underlying React Context object that we created in
      the <code>Context.js</code>. This means that the <code>Data</code> and{' '}
      <code>Setter</code> components will attach to the closest parent context,
      either provided by <code>Outer</code> or by <code>Inner</code>.
    </p>
  </div>


export default NestedDemo

