import React from 'react'
import App   from '../lib/Counter2/App.jsx'
import AppSrc from '../lib/Counter2/App.jsx?raw'
import CountSrc from '../lib/Counter2/Count.jsx?raw'
import CounterSrc from '../lib/Counter2/Counter.js?raw'
import ControlsSrc from '../lib/Counter2/Controls.jsx?raw'
import BignumSrc from '../lib/Counter2/Bignum.jsx?raw'
import UseCounterSrc from '../lib/Counter2/useCounter.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'

const CounterDemo = () =>
  <div>
    <h1>Counter Class Demo</h1>
    <p>
      Before <code>useState</code> was a thing we used to write classes derived
      from <code>React.Element</code> and call <code>this.setState()</code> to
      set state variables.
    </p>
    <p>
      Although this approach is less relevant nowadays for simple state
      management tasks, it&apos;s still perfectly valid and can be useful
      when you need to define more complex state or have lots of functions
      that might modify the state.  I find myself reaching for this when
      I need to share state across an entire web site (e.g. for user
      authentication or a shopping cart) or in a section of a web site
      (e.g. in the behind-the-schemes administration section of a site for
      product management, user management, order processing, etc.)
    </p>
    <p>
      The good news is that you can re-write your functional state component
      as an object class and nothing else needs to change.  All of the other
      code is identical to the previous example.
    </p>
    <p>
      Here&apos;s the same counter demonstration using this approach.
    </p>
    <CodeBlock language="jsx" source="<App/>"/>
    <div className="box">
      <App/>
    </div>
    <p>
      Here&apos;s the version with the count initially set to 100.  In
      addition we have a <code>debug</code> property to enable debugging
      messages.  Watch the Javascript console for messages as you
      click on the buttons.
    </p>
    <CodeBlock language="jsx" source="<App initialCount={100} debug={true}/>"/>
    <div className="box">
      <App initialCount={100} debug={true}/>
    </div>
    <p>
      This is what our application code <code>App.jsx</code> looks like.
      It&apos;s identical to the previous example.
    </p>
    <CodeBlock language="jsx" source={AppSrc}/>

    <h2>Counter.js</h2>
    <p>
      The only thing that has changed is the <code>Counter.js</code> where
      the application state is stored.
    </p>
    <CodeBlock language="jsx" source={CounterSrc}/>
    <p>
      We&apos;re now defining a <code>Counter</code> class to store the state.
      This extends the <code>Context</code> class imported from{' '}
      <code>@abw/react-context</code> in line 1.  You don&apos;t have to
      extend this base class, but it has the benefit of providing methods of
      convenience that your class will inherit.
    </p>
    <p>
      You can write your own <code>constructor</code> method to initialise
      the object if you need to.  For most cases you can define{' '}
      <code>static</code> properties, as show here between lines 4 and 13,
      and allow the base class constructor to take care of things for you.
    </p>
    <p>
      The <code>initialState</code> defines the initial state of the object,
      with the <code>count</code> being set to <code>0</code>.
    </p>
    <p>
      The <code>initialProps</code> defines the properties that can be passed
      to the object to set the state.  In this case, the{' '}
      <code>initialCount</code> property can be used to set the{' '}
      <code>count</code> to a value other than <code>0</code>, as demonstrated
      in the second example above where we start it off at <code>100</code>.
    </p>
    <p>
      The <code>actions</code> is a list of methods that should be exposed as
      actions in the context.  These can be specified as an array of method
      names, e.g <code>[&apos;inc&apos;, &apos;dec&apos;]</code>, or using the short-hand form
      shown here where they&apos;re specified using a single whitespace
      delimited string, e.g. <code>&apos;inc dec&apos;</code>.  Although it can
      be a bit tedious having to declare which methods you want to expose,
      I&apos;ve found that it&apos;s usually preferable to be explicit and
      avoid inadvertently exposing any internal methods that aren&apos;t for
      general use.
    </p>
    <p>
      The remaining three <code>static</code> values control debugging.
      The <code>debug</code> flag can be set here or as a property to enable
      or disable debugging.  The <code>debugPrefix</code> and{' '}
      <code>debugColor</code> are applied to messages sent to the Javascript
      console to help make them stand out.
    </p>
    <p>
      When debugging is enabled (i.e. <code>debug</code> is <code>true</code>) any
      calls to <code>this.debug()</code> will be formatted appropriately
      and sent to the Javascript console.  Otherwise they are ignored.
      See lines 16 and 20 in the <code>inc()</code> and <code>dec()</code>{' '}
      methods for examples.
    </p>
    <p>
      The <code>inc()</code> and <code>dec()</code> methods should be
      fairly self-explanatory.  They update the <code>count</code> in the
      state, respectively adding or subtracting the number passed as the
      argument, <code>n</code>, which defaults to <code>1</code>.
    </p>
    <p>
      As in the previous example, the final line is the important bit.  The
      default export on line 25 is where the <code>Counter</code> class is
      wrapped by a call to the <code>Generator</code> function,
      also imported from <code>@abw/react-context</code>.
    </p>
    <p>
      Using the class is exactly the same as in the previous example, and all
      of the component that access this state remain unchanged.
    </p>

    <h2>Count.jsx</h2>
    <CodeBlock language="jsx" source={CountSrc}/>

    <h2>Controls.jsx</h2>
    <CodeBlock language="jsx" source={ControlsSrc}/>

    <h2>Bignum.jsx</h2>
    <CodeBlock language="jsx" source={BignumSrc}/>

    <h2>useCounter.jsx</h2>
    <CodeBlock language="jsx" source={UseCounterSrc}/>
  </div>


export default CounterDemo

