import { Generator } from '../../../lib/index.js'
{/* START */}
import React from 'react'
import Outer from './Outer.jsx'
import Context from './Context.js'
// PRETEND: import { Generator } from '@abw/react-context'

const Inner = ({ name='anon', render }) => {
  const [data, setData] = React.useState({ })
  const { setItem: setOuterItem } = Outer.Use()
  const setItem = (key, value) => setData(
    data => {
      const newData = {
        ...data,
        [key]: value
      }
      setOuterItem(name, newData)
      return newData
    }
  )
  return render({
    data, setItem
  })
}

export default Generator(Inner, { }, Context)