export type CounterProps = {
  initialCount?: number
}

export type CounterState = {
  count: number
}

export type CounterRenderProps = {
  count: number,
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

