import Counter from './Counter'

const Bignum = ({ size='x2' }) => {
  const { count } = Counter.Use()
  return (
    <div className={size}>{count}</div>
  )
}

export default Bignum