import React from 'react'
import { toArray } from './Utils'
import { isFunction } from '@abw/badger-utils'
import { ModelType, ProviderType } from './types'

export const Generator = <ModelProps, RenderProps extends object>(
  Model: ModelType<ModelProps, RenderProps>,
  defaultState: RenderProps = { } as RenderProps,
  Context = React.createContext<RenderProps>(defaultState)
) => {
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
  // XXXeslint-disable-next-line react/display-name
  const Consumer = (Component: React.FC<RenderProps>) =>
    (props: Partial<RenderProps>) =>
      <Context.Consumer>
        {context => <Component {...context} {...props}/>}
      </Context.Consumer>

  const Children = ({ children }: { children: React.ReactNode }) =>
    toArray(children).map(
      (child, n) => isFunction(child)
        ? <Context.Consumer key={n}>
            {child}
          </Context.Consumer>
        : child
    )

  const Use = () => React.useContext(Context)

  return { Context, Provider, Consumer, Children, Use }
}

export default Generator
