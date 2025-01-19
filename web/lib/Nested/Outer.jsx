import { Generator } from '@/lib/index'
{/* START */}
import React from 'react'
import Context from './Context.js'
// PRETEND: import { Generator } from '@abw/react-context'

const Outer = Generator(
  ({ render }) => {
    const [data, setData] = React.useState({ })
    const setItem = (key, value) => setData(
      data => ({
        ...data,
        [key]: value
      })
    )
    return render({
      data, setItem
    })
  },
  { context: Context }  // The magic part
)

export const { Use: useOuter } = Outer
export default Outer
