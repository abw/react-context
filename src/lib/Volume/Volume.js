import { Generator } from '../../../lib/index.js'
{/* START */}
import { useState } from 'react'
// PRETEND: import { Generator } from '@abw/react-context'

const Volume = ({initialVolume=0, maxVolume=11, render}) => {
  const [volume, setVolume] = useState(parseInt(initialVolume))
  const oneLouder  = () => setVolume(Math.min(volume + 1, maxVolume))
  const oneQuieter = () => setVolume(Math.max(volume - 1, 0))

  return render({
    volume, setVolume, maxVolume, oneLouder, oneQuieter
  })
}

const generated = Generator(Volume)
export const { Context, Provider, Consumer, Use: useVolume } = generated
export default generated