import { Generator } from '../../../lib/index.js'
{/* START */}
import React from 'react'
import Context from './Context.js'
// PRETEND: import { Generator } from '@abw/react-context'

const Outer = ({ render }) => {
  const [data, setData] = React.useState({ })
  const setItem = (key, value) =>setData(
    data => ({
      ...data,
      [key]: value
    })
  )
  return render({
    data, setItem
  })
}

export default Generator(Outer, { }, Context)