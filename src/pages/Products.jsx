import React from 'react'
import App  from '../lib/Products/App.jsx'
import AppSrc from '../lib/Products/App.jsx?raw'
import ProductsSrc from '../lib/Products/Products.jsx?raw'
import LayoutSrc from '../lib/Products/Layout.jsx?raw'
import ListSrc from '../lib/Products/List.jsx?raw'
import InfoSrc from '../lib/Products/Info.jsx?raw'
import UseSrc from '../lib/Products/useProducts.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'

const Demo = () =>
  <div>
    <h1>Products Demo</h1>
    <p>
      This is a slightly more complex example showing how a context might be
      defined to manage a product catalogue.
    </p>
    <App/>

    <h2>App.jsx</h2>
    <p>
      This is what our <code>App.jsx</code> application code looks like.
    </p>
    <CodeBlock language="jsx" source={AppSrc}/>
    <p>
      We&apos;re defining a context in <code>Products.jsx</code> and
      setting up the <code>Products.Provider</code> around a number of
      other components.
    </p>

    <h2>Products.jsx</h2>
    <p>
      The <code>Products.jsx</code> is where all the fun happens.
    </p>
    <CodeBlock language="jsx" source={ProductsSrc}/>
    <p>
      We define an <code>initialState</code> which includes the {' '}
      <code>ready</code> flag which is initially set <code>false</code>.
    </p>
    <p>
      We use the <code>componentDidMount()</code> method to call
      the <code>loadProducts()</code> method.  In a real world application
      this might be making an API call to load product details, but in this
      example we&apos;re simulating it with a delay before setting the
      state to define some sample products.  In the state we set an array
      of <code>products</code> and build a <code>productById</code> index
      so we can quickly find a product by its <code>id</code>.  We also
      clear the <code>loading</code> flag and set <code>ready</code> to
      be <code>true</code>.
    </p>
    <p>
      The <code>selectProduct()</code> method is exposed as an action
      (see the <code>static actions</code> declaration near the top).  When
      called with a product <code>id</code> it fetches the product from the{' '}
      <code>productById</code> index and stores it in the state as <code>product</code>.
    </p>
    <p>
      The <code>getRenderProps()</code> method allows us to tailor what we
      expose in the context.  By default, everything in the{' '}
      <code>context</code> returned by the <code>getContext()</code> method
      would be exposed as separate items.  But here we bundle them all up
      as a single <code>Products</code> group.  For convenience we also
      expose the list of <code>products</code> and any <code>product</code>{' '}
      that might be selected.
    </p>

    <h2>Layout.jsx</h2>
    <p>
      The <code>Layout.jsx</code> component uses the{' '}
      <code>Products.Consumer</code> to subscribe to all those items that
      the <code>Products</code> context exports.  Everything is contained
      in the single <code>Products</code> property.  The component checks
      the state of the <code>Products.ready</code> flag and displays a
      &quot;Loading...&quot; message while the products are being loaded.
      After that it renders all of its child components.
    </p>
    <CodeBlock language="jsx" source={LayoutSrc}/>

    <h2>List.jsx</h2>
    <p>
      The <code>List.jsx</code> component is one of those children.
      It also uses the <code>Products.consumer</code> and receives the
      context data as the <code>Products</code> property, as well as the
      separate list of <code>products</code> (which is just a short-cut of
      convenience - it could also be accessed as <code>Products.products</code>).
    </p>
    <p>
      It renders the products as a list of buttons.  Each one has an{' '}
      <code>onClick</code> handler which calls the{' '}
      <code>Products.selectProduct()</code> method to select the product.
    </p>
    <CodeBlock language="jsx" source={ListSrc}/>

    <h2>Info.jsx</h2>
    <p>
      The <code>Info.jsx</code> component takes a different approach for
      the sake of this example.  It uses the <code>useProducts()</code> function
      to access the context data instead of <code>Products.Consumer</code>.
      If a <code>product</code> is defined in the context data (i.e. a product
      has been selected by clicking on a button to invoke the{' '}
      <code>selectProduct()</code> method) then it displays some information
      about the product.
    </p>
    <CodeBlock language="jsx" source={InfoSrc}/>

    <h2>useProducts.jsx</h2>
    <p>
      For completeness, here&apos;s the trivially simple{' '}
      <code>useProducts.jsx</code> component that simply re-exports the{' '}
      <code>Products.Use</code> function.
    </p>
    <CodeBlock language="jsx" source={UseSrc}/>
  </div>

export default Demo

