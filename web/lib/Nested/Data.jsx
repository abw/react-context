import React from 'react'
import Outer from './Outer.jsx'

const Data = ({ data }) =>
  <div className="mar-b-4">
    <h3 className="mar-b-2">Data</h3>
    <div className="font-mono">{JSON.stringify(data)}</div>
  </div>

export default Outer.Consumer(Data)