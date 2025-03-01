export type CounterProps = {
  initialCount?: number
}

export type CounterRenderProps = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>,
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

