import React      from 'react'
import CodeBlock  from '../site/CodeBlock.jsx'

const GettingStarted = () =>
  <div>
    <h1>Getting Started</h1>
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

  </div>

export default GettingStarted