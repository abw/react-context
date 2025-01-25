import { Provider } from './Counter'
import Count from './Count'
import Controls from './Controls'

const CounterApp = () =>
  <Provider initialCount={10}>
    <Count/>
    <Controls color="green"/>
  </Provider>

export default CounterApp
