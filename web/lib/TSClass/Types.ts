import { ContextProps } from '@/lib/index'
/* START */
// PRETEND: import { ContextProps } from '@abw/react-context'

export type CounterProps = ContextProps<{
  initialCount?: number
}>

export type CounterState = {
  count: number
}

export type CounterActions = {
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

export type CounterRenderProps = CounterProps & CounterState & CounterActions

