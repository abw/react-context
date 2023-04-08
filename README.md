# react-context

## Introduction

This is a small and simple module that provides some syntactic sugar to
streamline the use of React Context to maintain state in your React
applications.

It is simple and small (less than 1kB compressed) and has no external
dependencies other than React.

If you're not already familiar with React Context then you should start by
reading the React Context documentation: https://react.dev/reference/react/useContext

Note that this module supercedes its predecessor
[@abw/react-context-generator](https://www.npmjs.com/package/@abw/react-context-generator).

## Getting Started

Add the `@abw/react-context` module to your project using your favourite
package manager.

```bash
## using npm
$ npm add @abw/react-context

## using yarn
$ yarn add @abw/react-context

## using pnpm
$ pnpm add @abw/react-context
```

You can then import the modules and start using them.

```jsx
import { Context, Generator } from '@abw/react-context'
```

## Documentation

Visit the [documentation](https://abw.github.io/react-context/) web site
for detailed documentation.

## Quick Example

Define a React component that uses state along with any functions you want
to expose to update the state.

Wrap the component in a call to the `Generator` function when you export
it as the default.

Your component will be passed a `render` function which it should call,
passing in the state and any functions that you want to share.  The component
should return the result of the `render()` call.

For example, this is the `Counter.js` component.

```js
import { useState } from 'react'
import { Generator } from '@abw/react-context'

const Counter = ({initialCount=0, render}) => {
  const [count, setCount] = useState(initialCount)
  const inc = (n=1) => setCount(count + n)
  const dec = (n=1) => setCount(count - n)

  return render({
    count, inc, dec
  })
}

export default Generator(Counter)
```

Import your component into your application and use the `.Provider` to
define the context provider.

```jsx
import React    from 'react'
import Counter  from './Counter.js'
import Count    from './Count.jsx'
import Controls from './Controls.jsx'
import Bignum   from './Bignum.jsx'

export const App = (props) =>
  <Counter.Provider {...props}>
    <Count/>
    <Controls/>
  </Counter.Provider>

export default App
```

Any components inside the scope of the provider can access the content.
They can do this by wrapping themselves in a call to the `.Consumer`.

Here's the `Count.jsx` component.

```jsx
import React   from 'react'
import Counter from './Counter.js'

const Count = ({count}) =>
  <p>
    The current count is {count}
  </p>

export default Counter.Consumer(Count)
```

Or they can call the `.Use` function to access the context.

```jsx
import React   from 'react'
import Counter from './Counter.js'

const Count = ({count}) => {
  const { count } = Counter.Use()
  return (
    <p>
      The current count is {count}
    </p>
  )
}

export default Count
```

## Notes for Maintainers

Check out the repository.

```bash
$ git clone https://github.com/abw/react-context.git
$ cd react-context
```

Install the dependencies.

```bash
$ pnpm install
```

To run the development server.

```bash
$ pnpm dev
```

To run the tests.

```bash
$ pnpm test
```

To build for production.

```bash
$ pnpm build
```

To build the documentation.

```bash
$ pnpm build:docs
```

To preview the documentation.

```bash
$ pnpm preview
```

## Project Structure

The main project code is in the `lib` directory.  The `index.js` is the
main entry point.

Running `pnpm build` creates a production build in the `dist`
directory.

The `src` directory contains the web site for development, testing and
documentation.  The `index.html` is the main entry point.

Running `pnpm dev` runs a development web server for the site.

Running `pnpm build:docs` builds the site and saves the bundled
output in the `docs` directory.  Any additional resources in the `public`
directory will be included in there.

The `styles` directory contains SASS stylesheets used by the web site.
The `main.scss` file is the main stylesheet which is imported into
`src/main.jsx`.

The `test` directory contains test scripts which will be run by
`pnpm test`.  The `test/setup.js` file is a special setup file.
Any files in `test/lib` are assumed to be components used by tests and
are not test scripts in their own right.  They are ignored by the test
runner.

## Notes

This was originally released as the `@abw/react-context-generator` module
and supercedes it.  That module is still available but will not have any
further development.

## Author

Andy Wardley, https://github.com/abw