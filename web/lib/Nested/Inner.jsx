import { Generator } from '@/lib/index'
{/* START */}
import React from 'react'
import Context from './Context.js'
import { useOuter } from './Outer.jsx'
// PRETEND: import { Generator } from '@abw/react-context'

const Inner = Generator(
  ({ name='anon', render }) => {
    const [data, setData] = React.useState({ })
    const { setItem: setOuterItem } = useOuter()
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
  },
  { context: Context }  // The magic part
)

export default Inner
