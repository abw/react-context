import React        from 'react'
import { Consumer } from './Volume.js'

const Slider = ({volume, setVolume, maxVolume}) =>
  <input
    type="range" className="volume-slider"
    value={volume} min="0" max={maxVolume}
    onChange={e => setVolume(e.target.value)}
  />

export default Consumer(Slider)