import React        from 'react'
import { Consumer } from './Volume.js'

const Buttons = ({oneLouder, oneQuieter}) => <div>
  <button onClick={oneQuieter}>One Quieter</button>
  <button onClick={oneLouder}>One Louder</button>
</div>

export default Consumer(Buttons)