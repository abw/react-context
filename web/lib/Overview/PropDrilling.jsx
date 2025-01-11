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
      {/* This component might be get complicated so we better pass
        * everything to it, in case it's required by the component,
        * one of its children, grand-children, etc.
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