import { SetState } from "@/lib/types"
/* START */
// PRETEND: import { SetState } from "@abw/react-context"

export type CounterRenderProps = {
  count: number
  setCount: SetState<number>,
  inc: (n?: number) => void,
  dec: (n?: number) => void,
}

