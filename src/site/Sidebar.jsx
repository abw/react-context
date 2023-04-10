import React from 'react'
import Link from './Link.jsx'
import { date, version } from './Utils.jsx'
import { ReactComponent as Abw } from '../svg/abw.svg'

const Sidebar = () =>
  <>
    <div className="menu">
      <h4>@abw/react-context</h4>
      <ul className="menu">
        <li><Link to="/" end text="Home"/></li>
        <li><Link to="getting-started" text="Getting Started"/></li>
        <li><Link to="simple-counter"  text="Simple Counter"/></li>
        <li><Link to="counter-class"   text="Counter Class"/></li>
        <li><Link to="products-demo"   text="Products and Basket"/></li>
        <li><Link to="streamlining"    text="Streamlining Exports"/></li>
        <li><Link to="consumer-use"    text="Consumer vs Use"/></li>
      </ul>
    </div>
    <footer>
      <div className="notes">
        <div>
          Version {version}
        </div>
        <a href="https://github.com/abw">
          <Abw/>
        </a>
        <div>
          {date}
        </div>
      </div>
    </footer>
  </>


export default Sidebar