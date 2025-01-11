export type CounterProps = {
  initialCount?: number
}

export type CounterRenderProps = {
  count: number
  setCount: (n: number) => void,
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}
