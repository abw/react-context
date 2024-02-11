import React from 'react'
import { isFunction, toArray } from './Utils.js'

export const Generator = (Model, defaultState={}) => {
  const Context = React.createContext(defaultState)

  // Provider renders the Model component forwarding all props passed to it
  // along with a render prop to render the children inside a context provider
  const Provider = props =>
    <Model
      {...props}
      render={
        context =>
          <Context.Provider value={context}>
            {props.children}
          </Context.Provider>
      }
    />

  // Consumer renders a component inside a context consumer
  // eslint-disable-next-line react/display-name
  const Consumer = Component => props =>
    <Context.Consumer>
      {context => <Component {...context} {...props}/>}
    </Context.Consumer>

  const Children = ({children}) =>
    toArray(children).map(
      (child, n) => isFunction(child)
        ? <Context.Consumer key={n}>
            {child}
          </Context.Consumer>
        : child
    )

  const Use = () => {
    return React.useContext(Context)
  }

  return { Context, Provider, Consumer, Children, Use }
}

export default Generator
