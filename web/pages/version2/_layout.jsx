import React from 'react'
import { Link, Outlet } from '@abw/badger-website'

export const metadata = {
  prevNext: false
}

const Layout = () =>
  <div>
    <div
      className="compact warning alert flex space pad-a-2 border"
      style={{ margin: '-1rem -1rem 2rem -1rem' }}
    >
      <div>
        <b>NOTE:</b> This is the <b>version 2</b> documentation
      </div>
      <div>
        <Link to="/">Version 3</Link> is the latest version.
      </div>
    </div>
    <Outlet/>
  </div>

export default Layout