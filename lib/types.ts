import { PropsWithChildren } from 'react'

export type DebugOptions = {
  debug?: boolean,
  debugPrefix?: string,
  debugColor?: string,
  [key: string]: unknown
}

// The render function takes render props and returns a JSX Element
export type Render<RenderProps> = {
  render: (props: RenderProps) => JSX.Element
}

// The properties passed to the model include a render() function with Render
// type.  This type adds the render function to Props.
export type PropsWithRender<Props, RenderProps> = Props & Render<RenderProps>

// The model takes provider props and calls the render function
export type ModelType<Props, RenderProps> = React.ComponentType<
  PropsWithRender<Props, RenderProps>
>

// The provider accepts Props along with children for child content
export type ProviderProps<Props> = PropsWithChildren<Props>

// The provider has the above properties and returns a JSX Element
export type ProviderType<Props> = (props: ProviderProps<Props>) => JSX.Element
