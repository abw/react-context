import React from 'react'
import App   from '../lib/Counter/App.jsx'
import AppSrc from '../lib/Counter/App.jsx?raw'
import CountSrc from '../lib/Counter/Count.jsx?raw'
import CounterSrc from '../lib/Counter/Counter.js?raw'
import ControlsSrc from '../lib/Counter/Controls.jsx?raw'
import BignumSrc from '../lib/Counter/Bignum.jsx?raw'
import Bignum2Src from '../lib/Counter/Bignum2.jsx?raw'
import UseCounterSrc from '../lib/Counter/useCounter.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'

const CounterDemo = () =>
  <div>
    <h1>Counter Demo</h1>
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
      Here&apos;s another version with the count initially set to 100 and
      debugging enabled.  Watch the Javascript console for messages as you
      click on the buttons.
    </p>
    <CodeBlock language="jsx" source="<App initialCount={100} debug={true}/>"/>
    <div className="box">
      <App initialCount={100} debug={true}/>
    </div>
    <p>
      This is what our application code <code>App.jsx</code> looks like.
    </p>
    <CodeBlock language="jsx" source={AppSrc}/>
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
      The <code>Counter</code> class extends the <code>Context</code> class
      imported from <code>@abw/react-context</code>.
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
      in the second example above.
    </p>
    <p>
      The <code>actions</code> is a list of methods that should be exposed as
      actions in the context.  These can be specified as an array of method
      names, e.g <code>[&apos;inc&apos;, &apos;dec&apos;]</code>, or using the short-hand form
      shown here where they&apos;re specified using a single whitespace
      delimited string, e.g. <code>&apos;inc dec&apos;</code>
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
      calls to <code>this.debug()</code> (see the <code>inc()</code> and{' '}
      <code>dec()</code> methods for examples) will be formatted appropriately
      and sent to the Javascript console.  Otherwise they are ignored.
    </p>
    <p>
      The <code>inc()</code> and <code>dec()</code> methods should be
      fairly self-explanatory.  They update the <code>count</code> in the
      state, respectively adding or subtracting the number passed as the
      argument, <code>n</code>, which defaults to <code>1</code>.
    </p>
    <p>
      The final line is the important bit.  The default export is the{' '}
      <code>Counter</code> class wrapped by a call to the{' '}
      <code>Generator</code> function,
      also imported from <code>@abw/react-context</code>.
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
      <code>App.jsx</code>.  This should be used to provide access to the
      context for any components contained within it.
    </p>
    <CodeBlock language="jsx" source={`import Counter from './Counter.jsx'

export const App = (props) =>
  <Counter.Provider {...props}>
    ...
  </Counter.Provider>`}/>
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
      The <code>useCounter.js</code> component is a simple function which
      simply re-exports the <code>Use</code> function for the sake of
      convention.
    </p>
    <CodeBlock language="jsx" source={UseCounterSrc}/>
    <p>
      The <code>Bignum.jsx</code> module could then be written as:
    </p>
    <CodeBlock language="jsx" source={Bignum2Src}/>
  </div>


export default CounterDemo

