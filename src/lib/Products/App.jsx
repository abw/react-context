import React    from 'react'
import Products from './Products.jsx'
import Layout   from './Layout.jsx'
import Info     from './Info.jsx'
import List     from './List.jsx'

const App = () =>
  <Products.Provider debug={true}>
    <Layout>
      <List/>
      <Info/>
    </Layout>
  </Products.Provider>

export default App