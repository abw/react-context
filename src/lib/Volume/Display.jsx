import React         from 'react'
import { useVolume } from './Volume.js'

const Display = () => {
  const { volume } = useVolume()
  return (
    <div className="bignum">{volume}</div>
  )
}

export default Display