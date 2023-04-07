# react-context

This is the README for react-context.  It was created using
[badger-scaffold-js](https://github.com/abw/badger-scaffold-js).

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
import { Hello } from '@abw/react-context'
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

The main project code is in the `lib` directory.  The `index.jsx` is the
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
