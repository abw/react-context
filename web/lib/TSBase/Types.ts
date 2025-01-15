export type CounterProps = {
  initialCount?: number
}

export type CounterRenderProps = {
  count: number
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

export type CounterState = {
  count: number
}
