import { PropsWithChildren } from 'react'

export type DebugOptions = {
  debug?: boolean,
  debugPrefix?: string,   // TODO: these can be functions
  debugColor?: string,
  [key: string]: unknown
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

// TODO: fix these
export type ActionMethod = (...args: unknown[]) => unknown
export type ActionMethods = Record<string, ActionMethod>