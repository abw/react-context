import React from 'react'
import { toArray } from './Utils'
import { isFunction } from '@abw/badger-utils'
import {
  ContextType, GeneratorOptions, ProviderType, RenderChild, RenderChildren
} from './types'

export const Generator = <
  ModelProps = { },
  RenderProps = ModelProps
>(
    Model: ContextType<ModelProps, RenderProps>,
    options: GeneratorOptions<RenderProps> = { }
  ) => {
  const defaultState = options.defaultState || { } as RenderProps
  // const Context = options.context || React.createContext<RenderProps>(defaultState)
  const Context = options.context || React.createContext<RenderProps>(defaultState)

  // Provider renders the Model component forwarding all props passed to it
  // along with a render prop to render the children inside a context provider
  const Provider: ProviderType<ModelProps> = props =>
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
  const Consumer = <Props={}>(Component: React.FC<RenderProps & Props>) =>
    (props: Props & Partial<RenderProps>) =>
      <Context.Consumer>
        {
          context =>
            <Component {...context} {...props}/>
        }
      </Context.Consumer>

  // Children renders all children inside a context consumer
  const Children = ({ children }: RenderChildren<RenderProps>) =>
    toArray(children).map(
      (child, n) => isFunction(child)
        ? <Context.Consumer key={n}>
            { child as RenderChild<RenderProps> }
          </Context.Consumer>
        : child as React.ReactNode
    )

  // Use allow a caller to use the context
  const Use = () => React.useContext(Context)

  return {
    Context,
    Provider,
    Consumer,
    Children,
    Use
  }
}

export default Generator
