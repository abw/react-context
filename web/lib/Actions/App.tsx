import { AmplifierProvider } from './Context'
import Volume from './Volume'
import Controls from './Controls'

export const App = () =>
  <div className="surface-5 border pad-2 bdr-2">
    <AmplifierProvider>
      <Volume/>
      <Controls/>
    </AmplifierProvider>
  </div>

export default App