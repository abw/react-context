import React from 'react'
import Outer from './Outer.jsx'
import { now } from '@abw/badger-timestamp'

const Setter = ({ setItem }) =>
  <div className="flex gap-2 brand">
    <button onClick={() => setItem('message', 'Hello World')}>Hello World!</button>
    <button onClick={() => setItem('message', 'Goodbye World')}>Goodbye World!</button>
    <button onClick={() => setItem('time', now().stamp())}>Time</button>
  </div>

export default Outer.Consumer(Setter)