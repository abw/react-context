import React        from 'react'
import { Consumer } from './Volume.js'

const Buttons = ({oneLouder, oneQuieter}) =>
  <div className="flex gap-2 brand">
    <button onClick={oneQuieter}>One Quieter</button>
    <button onClick={oneLouder}>One Louder</button>
  </div>

export default Consumer(Buttons)