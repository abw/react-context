import React from 'react'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import GettingStarted from '../pages/GettingStarted.jsx'
import { createBrowserRouter } from 'react-router-dom'
import ProductsDemo from '../pages/Products.jsx'
import CounterClass from '../pages/CounterClass.jsx'
import SimpleCounter from '../pages/SimpleCounter.jsx'

export const Router = createBrowserRouter(
  [
    {
      path:     '/',
      element:  <Layout/>,
      children: [
        { path: '/',               element: <Home/> },
        { path: 'getting-started', element: <GettingStarted/> },
        { path: 'simple-counter',  element: <SimpleCounter/> },
        { path: 'counter-class',   element: <CounterClass/> },
        { path: 'products-demo',   element: <ProductsDemo/> },
      ]
    },
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router