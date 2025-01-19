import React        from 'react'
import { Consumer } from './Volume.js'

const Slider = ({ volume, setVolume, maxVolume }) =>
  <input
    type="range"
    min="0"
    max={maxVolume}
    value={volume}
    onChange={e => setVolume(parseInt(e.target.value))}
  />

export default Consumer(Slider)