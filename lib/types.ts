import { PropsWithChildren } from 'react'

export type DebugConfigFunction = (...args: unknown[]) => string
export type DebugConfigOption = undefined | string | DebugConfigFunction
export type DebugOptions = {
  debug?: boolean,
  debugPrefix?: DebugConfigOption,
  debugColor?: DebugConfigOption,
  // [key: string]: unknown
}

// The render function takes render props and returns a JSX Element
export type Render<RenderProps> = {
  render: (props: RenderProps) => JSX.Element
}

// The properties passed to the provider model include a render() function
// with Render type.  This type adds this render function to Props.
export type PropsWithRender<Props, RenderProps> = Props & Render<RenderProps>

// The model takes provider props and calls the render function
export type ContextType<Props, RenderProps> = React.ComponentType<
  PropsWithRender<Props, RenderProps>
>

// The provider accepts Props along with children for child content
export type ProviderProps<Props> = PropsWithChildren<Props>

// The provider has the above properties and returns a JSX Element
export type ProviderType<Props> = (props: ProviderProps<Props>) => JSX.Element

// export type ContextTypeClass

export type DebugMethod = (...args: unknown[]) => void

// Alias to simplify this ugliness
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

// Methods that are bound to context as callable functions
export type ActionMethod = (...args: unknown[]) => unknown
export type ActionMethods = Record<string, ActionMethod>

export type WithRequired<T, K extends keyof T> =
  T & Required<Pick<T, K>>

export type WithRequiredFrom<T extends Partial<D>, D> =
  T & Required<Pick<T, keyof D>>
