import Counter from './Counter'

const useCounter = Counter.Use

const Bignum = ({ size='x2' }) => {
  const { count } = useCounter()
  return (
    <div className={size}>{count}</div>
  )
}

export default Bignum