import React from 'react'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import GettingStarted from '../pages/GettingStarted.jsx'
import ProductsDemo from '../pages/Products.jsx'
import CounterClass from '../pages/CounterClass.jsx'
import SimpleCounter from '../pages/SimpleCounter.jsx'
import FlexibleChildren from '../pages/FlexibleChildren.jsx'
import Streamlining from '../pages/Streamlining.jsx'
import ConsumerUse from '../pages/ConsumerUse.jsx'
import Nested from '../pages/Nested.jsx'
import { createBrowserRouter } from 'react-router-dom'

export const Router = createBrowserRouter(
  [
    {
      path:     '/',
      element:  <Layout/>,
      children: [
        { path: '/',                 element: <Home/> },
        { path: 'getting-started',   element: <GettingStarted/> },
        { path: 'simple-counter',    element: <SimpleCounter/> },
        { path: 'flexible-children', element: <FlexibleChildren/> },
        { path: 'counter-class',     element: <CounterClass/> },
        { path: 'products-demo',     element: <ProductsDemo/> },
        { path: 'streamlining',      element: <Streamlining/> },
        { path: 'consumer-use',      element: <ConsumerUse/> },
        { path: 'nested',            element: <Nested/> },
      ]
    },
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router