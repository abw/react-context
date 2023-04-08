import React from 'react'
import App   from '../lib/Counter1/App.jsx'
import AppSrc from '../lib/Counter1/App.jsx?raw'
import CountSrc from '../lib/Counter1/Count.jsx?raw'
import CounterSrc from '../lib/Counter1/Counter.js?raw'
import ControlsSrc from '../lib/Counter1/Controls.jsx?raw'
import BignumSrc from '../lib/Counter1/Bignum.jsx?raw'
import Bignum2Src from '../lib/Counter1/Bignum2.jsx?raw'
import UseCounterSrc from '../lib/Counter1/useCounter.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'

const CounterDemo = () =>
  <div>
    <h1>Simple Counter Demo</h1>
    <p>
      This is a simple example showing how a context can be defined and used.
      First, let&apos;s see it in action.  Click on the buttons to change the
      count.
    </p>
    <CodeBlock language="jsx" source="<App/>"/>
    <div className="box">
      <App/>
    </div>
    <p>
      Here&apos;s another version with the count initially set to 100.
    </p>
    <CodeBlock language="jsx" source="<App initialCount={100}/>"/>
    <div className="box">
      <App initialCount={100} debug={true}/>
    </div>
    <p>
      This is what our application code <code>App.jsx</code> looks like.
    </p>
    <CodeBlock language="jsx" source={AppSrc}/>
    <p>
      Between lines 8 and 16 we define a <code>Counter.Provider</code> which
      provides the shared state for any components contained within it.
    </p>
    <p>
      Let&apos;s look at each component in turn.
    </p>

    <h2>Counter.js</h2>
    <p>
      This is the <code>Counter.js</code> where the application state is
      stored.
    </p>
    <CodeBlock language="jsx" source={CounterSrc}/>
    <p>
      In line 5 the <code>Counter</code> component uses the <code>useState</code> hook
      to define a <code>count</code> state variable and <code>setCount</code>{' '}
      function to update it.
    </p>
    <p>
      The <code>initialCount</code> property can be passed to the component
      to set the initial value for <code>count</code>.  Otherwise it defaults
      to <code>0</code>.
    </p>
    <p>
      We then define two handler functions <code>inc()</code> and{' '}
      <code>dec()</code> on lines 6 and 7 to increment and decrement the{' '}
      <code>count</code>, respectively.  They can be passed a number{' '}
      <code>n</code> which defaults to <code>1</code>.
    </p>
    <p>
      So far this is all standard React code.  Where it gets interesting is
      the <code>return</code> value from the component between lines 9 and 11.
      We return the result of calling the <code>render()</code> function that
      has been passed to the component as a property on line 4.
    </p>
    <p>
      We pass an object to the <code>render()</code> function containing
      the <code>count</code> state variable and the <code>inc()</code> and{' '}
      <code>dec()</code> functions.  We could also forward the{' '}
      <code>setState()</code> function if we wanted to allow other components
      direct access to modify the <code>count</code> variable.
    </p>
    <p>
      So where does the <code>render</code> property come from?
      The final line is the important bit.  The default export on line 14
      is the <code>Counter</code> component wrapped by a call to the{' '}
      <code>Generator</code> function, imported from{' '}
      <code>@abw/react-context</code> in line 2.  This turns our simple
      component that maintains its own state into a context object that
      can be used to share that state with any number of other components.
    </p>
    <p>
      The <code>Generator</code> function returns an object containing{' '}
      <code>{'{'} Context, Provider, Consumer, Use {'}'}</code>.
    </p>
    <p>
      The <code>Context</code> is the React context object.  You probably
      won&apos;t ever need to use this, but it&apos;s provided just in case
      you do.
    </p>
    <p>
      We&apos;ve already seen the <code>Provider</code> in use in our{' '}
      <code>App.jsx</code>.  This is how we provide access to the context for
      any components contained within it.
    </p>
    <p>
      The other components in our application demonstrate how the{' '}
      <code>Consumer</code> and <code>Use</code> items can be used.
    </p>

    <h2>Count.jsx</h2>
    <p>
      The <code>Count.jsx</code> shows how the <code>Consumer</code> can be
      used to get access to the context.
    </p>
    <CodeBlock language="jsx" source={CountSrc}/>
    <p>
      The default export of the <code>Count</code> component is wrapped in a
      call to <code>Counter.Consumer</code>.  This ensures that all the context
      state variables (just <code>count</code> in this example) and any exposed
      actions (<code>inc()</code> and <code>dec()</code>, not used in this
      component) are provided as properties to the component.
    </p>

    <h2>Controls.jsx</h2>
    <p>
      The <code>Controls.jsx</code> component also uses the{' '}
      <code>Counter.Consumer</code> to get access to the{' '}
      <code>inc()</code> and <code>dec()</code> actions.
    </p>
    <CodeBlock language="jsx" source={ControlsSrc}/>

    <h2>Bignum.jsx</h2>
    <p>
      The <code>Bignum.jsx</code> component takes a different approach which
      tends to be preferred these days.
    </p>
    <CodeBlock language="jsx" source={BignumSrc}/>
    <p>
      Instead of wrapping the exported component in a call to{' '}
      <code>Counter.Consumer</code>, it calls the <code>Counter.Use()</code>{' '}
      function which, provides access to the context state and actions.
    </p>

    <h2>useCounter.jsx</h2>
    <p>
      The <code>useCounter.js</code> file simply re-exports the{' '}
      <code>Use</code> function for the sake of convention.  It allows us
      to use the <code>useCounter()</code> function to access the context
      which is a little less clunky than <code>Counter.Use()</code>.
    </p>
    <CodeBlock language="jsx" source={UseCounterSrc}/>
    <p>
      The <code>Bignum.jsx</code> module could then be written as:
    </p>
    <CodeBlock language="jsx" source={Bignum2Src}/>
  </div>


export default CounterDemo

