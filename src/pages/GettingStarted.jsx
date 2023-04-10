import React      from 'react'
import AppSrc from '../lib/Counter2/App.jsx?raw'
import CodeBlock  from '../site/CodeBlock.jsx'
import CountSrc from '../lib/Counter1/Count.jsx?raw'
import CounterSrc from '../lib/Counter1/Counter.js?raw'
import ControlsSrc from '../lib/Counter1/Controls.jsx?raw'
import Bignum2Src from '../lib/Counter1/Bignum2.jsx?raw'
import UseCounterSrc from '../lib/Counter1/useCounter.jsx?raw'

const GettingStarted = () =>
  <div>
    <h1>Getting Started</h1>
    <h2>Installation</h2>
    <p>
      Add the <code className="code">@abw/react-context</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash">
      {`## using npm
$ npm add @abw/react-context

## using yarn
$ yarn add @abw/react-context

## using pnpm
$ pnpm add @abw/react-context
`}
    </CodeBlock>
    <p>
      You can then import the modules and start using them.
    </p>
    <CodeBlock>
      {`import { Context, Generator } from '@abw/react-context'`}
    </CodeBlock>

    <h2>Quick Overview</h2>
    <p className="mar-t-1">
      These examples give a quick overview of how it works.  See the
      example pages linked in the sidebar for a more detailed explanation.
    </p>
    <p>
      Use the <code>Generator</code> method to wrap up a component that
      defines some state and action methods that you want to share.  Your
      component will be passed a <code>render</code> function which you should
      call, passing any state and actions that you want to expose.  Return the
      result of calling that function.
    </p>
    <h3 className="filename">Counter.js</h3>
    <CodeBlock language="jsx" source={CounterSrc}/>

    <p>
      Then import the component and use the <code>.Provider</code> property
      to define a context provider around the part of your application
      that needs access to the context data.
    </p>
    <h3 className="filename">App.jsx</h3>
    <CodeBlock language="jsx" source={AppSrc}/>

    <p>
      Then any component enclosed within the scope of the provider can access
      the context data.  One way is to use the <code>.Consumer()</code> function
      to wrap the component.  It will be passed all the context data as properties.
    </p>
    <h3 className="filename">Count.jsx</h3>
    <CodeBlock language="jsx" source={CountSrc}/>

    <h3 className="filename">Controls.jsx</h3>
    <CodeBlock language="jsx" source={ControlsSrc}/>

    <p>
      The generator also creates a <code>.Use()</code> function to use the
      context.  You can use it directly, or create a trivial component to
      expose it with a name like <code>useCounter()</code>
    </p>

    <h3 className="filename">useCounter.jsx</h3>
    <CodeBlock language="jsx" source={UseCounterSrc}/>

    <p>
      Here&apos;s a component using that function to access the context.
    </p>
    <h3 className="filename">Bignum.jsx</h3>
    <CodeBlock language="jsx" source={Bignum2Src}/>
  </div>

export default GettingStarted