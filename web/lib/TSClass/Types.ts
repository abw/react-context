export type CounterProps = {
  initialCount?: number
}

export type CounterState = {
  count: number
}

export type CounterActions = {
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

export type CounterRenderProps = CounterProps & CounterState & CounterActions

