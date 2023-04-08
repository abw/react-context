import React      from 'react'
import Link       from '../site/Link.jsx'
import { imgUrl } from '../site/Utils.jsx'

const Home = () =>
  <div className="">
    <h1>@abw/react-context</h1>
    <a href="https://github.com/abw/react-context" className="github">
      <img
        src="https://github.githubassets.com/favicons/favicon.svg"
        alt="Github repository"
      />
    </a>
    <div className="pic-side">
      <img src={imgUrl('react-context.svg')}/>
      <div className="blurb">
        <p className="intro">
          <code className="code">@abw/react-context</code> is a React library
          providing some useful functionality for working with React
          contexts.
        </p>
        <p className="subintro">
          It is <i>super</i> simple and <i>very</i> small (less than 1kB
          compressed).  It has no dependencies and introduces very little
          overhead to a project.
        </p>
      </div>
    </div>
    <p>
      There are plenty of other excellent tools available for managing state
      in React.  This isn&apos;t supposed to be any better or worse, just
      different.  If anything, its simplicity is perhaps the best feature and
      what sets it apart.  If you already know how to use React contexts
      then there&apos;s not much else that you need to know to get started
      using it.
    </p>
    <p className="link">
      See the <Link to="getting-started">Getting Started</Link> page for
      instructions on how to install it and start using it
    </p>
    <p>
      These days <a href="https://react.dev/reference/react/useState">useState</a>{' '}
      is the preferred way to define stateful variables in React.  This module
      provides a simple wrapper function that allows you to convert a component
      that defines some internal state into a set of components that make it
      possible to easily share that state.  A <code>Provider</code> shares
      the state and a <code>Consumer</code> can consume it.
    </p>
    <p className="link">
      See the <Link to="simple-counter">Simple Counter</Link> page for a
      demonstration and detailed explanation of the code.
    </p>
    <p>
      It wasn&apos;t that long ago when we had to write classes derived from{' '}
      <code>React.Element</code> to maintain state, and call{' '}
      <code>this.setState()</code> to update the state.
    </p>
    <p>
      Although this approach is less relevant nowadays for simple state
      management tasks, I still find myself reaching for this when I need to
      define a more complex state object that needs to provide shared state
      for a section of a web site comprising of many pages and components.
      There&apos;s a <code>Context</code> base class that you can extend to
      create your own
      state classes.  It provides various methods of convenience to reduce
      the amount of code you need to write.
    </p>
    <p className="link">
      See the <Link to="counter-class">Counter Class</Link> page for a
      demonstration and explanation of context classes
    </p>
    <p>
      The final example shows a slightly more complex case where we have a
      product catalogue and a basket that a user can add products to.
    </p>
    <p className="link">
      See the <Link to="products-demo">Products and Basket</Link> page for the
      more complex example
    </p>
    <div className="badger">
      <img src={imgUrl('badger.svg')} alt="badger"/>
      <div className="caption">
        Built by Badgers
      </div>
    </div>
  </div>

export default Home

