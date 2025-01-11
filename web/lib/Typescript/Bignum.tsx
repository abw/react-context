import Counter from './Counter'

const Bignum = () => {
  const { count } = Counter.Use()
  return (
    <div className="x2">{count}</div>
  )
}

export default Bignum