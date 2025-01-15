import Counter  from './Counter'
import Count    from './Count'
import Controls from './Controls'
import Bignum   from './Bignum'

export const App = () =>
  <Counter.Provider initialCount={11}>
    <div className="flex space surface border pad-a-4 bdr-1">
      <div>
        <Count/>
        <Controls/>
      </div>
      <Bignum/>
    </div>
  </Counter.Provider>

export default App
