import React from 'react'
import CodeBlock from './CodeBlock.jsx'

export const Example = ({Element, source, children='', className=''}) => {
  return <div className={`example ${className}`}>
    { children
      ? <div className="explanation">
          {children}
        </div>
      : null
    }
    <div className="mar-t-4 code">
      <h4>Code</h4>
      <CodeBlock source={source}/>
    </div>
    { Element
      ? <>
          <div className="mar-t-4 output">
            <h4>Output</h4>
            <Element/>
          </div>
        </>
      : null
    }
  </div>
}

export default Example
