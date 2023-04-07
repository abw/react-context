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
      <img src={imgUrl('badger.svg')}/>
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
      These days <a href="https://react.dev/reference/react/useState">useState</a>{' '}
      is the preferred way to define stateful variables in React.  But it
      wasn&apos;t that long ago when we had to write classes derived from{' '}
      <code>React.Element</code> and call <code>this.setState()</code> to
      set state variables.  These modules were originally written in those
      olden times and provided functionality to make life slightly easier.
    </p>
    <p>
      Although they&apos;re less relevant nowadays for simple state management
      tasks, I still find myself reaching for them when I need to define a more
      complex state object that needs to provide shared state for a section of
      a web site comprising of many pages and components.
    </p>
    <p>
      There are plenty of other excellent tools available for managing state
      in React.  This isn&apos;t supposed to be any better or worse.  But it
      does use an approach that is far less relevant today than it was back
      then, so you might want to explore some of the other options first.
    </p>
    <div>
      <ul className="large menu">
        <li>
          <Link to="getting-started" text="Getting Started"/> - adding the module
          to your project.
        </li>
        <li>
          <Link to="counter-demo" text="Counter Demo"/> - a simple example showing
          how the modules can be used.
        </li>
        <li>
          <Link to="products-demo" text="Products Demo"/> - a more complex example
          demonstrating a product catalogue.
        </li>
      </ul>
    </div>
    <div className="badger">
      <img src={imgUrl('badger.svg')} alt="badger"/>
      <div className="caption">
        Built by Badgers
      </div>
    </div>
  </div>

export default Home

