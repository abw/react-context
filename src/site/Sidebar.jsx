import React from 'react'
import Link from './Link.jsx'
import { date, version } from './Utils.jsx'

const Sidebar = () =>
  <>
    <div className="menu">
      <h4>react-context</h4>
      <ul className="menu">
        <li><Link to="/" end text="Home"/></li>
        <li><Link to="getting-started" text="Getting Started"/></li>
        <li><Link to="simple-counter"  text="Simple Counter"/></li>
        <li><Link to="counter-class"   text="Counter Class"/></li>
        <li><Link to="products-demo"   text="Products and Basket"/></li>
      </ul>
    </div>
    <footer>
      <div>
        Version {version}
      </div>
      <div>
        {date}
      </div>
    </footer>
  </>


export default Sidebar