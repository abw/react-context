import Counter from './Counter'

const useCounter = Counter.Use

const Bignum = () => {
  const { count } = useCounter()
  return (
    <div className="x2">{count}</div>
  )
}

export default Bignum