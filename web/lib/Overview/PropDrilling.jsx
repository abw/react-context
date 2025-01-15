import { useState } from 'react'
import Count from './Count.jsx'
import Controls from './Controls.jsx'
import SomeOtherComponent from './SomeOtherComponent.jsx'

const Counter = ({ initialCount=0 }) => {
  const [count, setCount] = useState(initialCount)
  const inc = (n=1) => setCount(count + n)
  const dec = (n=1) => setCount(count - n)

  return (
    <>
      <Count count={count}/>
      <Controls inc={inc} dec={dec}/>
      {/* We don't know how complicated this component might be.
        * We better pass everything to it in case it requires any
        * of the properties or it needs to pass them on to its
        * child components, grand-children, etc.
        */}
      <SomeOtherComponent
        count={count}
        setCount={setCount}
        inc={inc}
        dec={dec}
      />
    </>
  )
}

export default Counter