import React from 'react'
import App  from '../lib/Products/App.jsx'
import AppSrc from '../lib/Products/App.jsx?raw'
import ProductsSrc from '../lib/Products/Products.js?raw'
import LayoutSrc from '../lib/Products/Layout.jsx?raw'
import ListSrc from '../lib/Products/List.jsx?raw'
import InfoSrc from '../lib/Products/Info.jsx?raw'
import BasketSrc from '../lib/Products/Basket.jsx?raw'
import InBasketSrc from '../lib/Products/InBasket.jsx?raw'
import NotInBasketSrc from '../lib/Products/NotInBasket.jsx?raw'
import UseSrc from '../lib/Products/useProducts.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'

const Demo = () =>
  <div>
    <h1>Products Demo</h1>
    <p>
      This is a more complex example showing how a context might be
      defined to manage a product catalogue and allow a user to add
      items to a basket.  Debugging is enabled for this example so watch
      the Javascript console for messages as you click on the buttons.
    </p>
    <App/>

    <p>
      This is what our <code>App.jsx</code> application code looks like.
    </p>

    <CodeBlock language="jsx" source={AppSrc} caption="App.jsx"/>

    <p>
      We&apos;re defining a context in <code>Products.js</code> and
      setting up the <code>Products.Provider</code> around a number of
      other components.
    </p>

    <p>
      The <code>Products.js</code> is where all the fun happens.
    </p>

    <CodeBlock language="jsx" source={ProductsSrc} caption="Products.js"/>

    <p>
      In line 11 we define an <code>initialState</code> which includes the {' '}
      <code>ready</code> flag which is initially set <code>false</code>.
      We also have an empty list of <code>products</code> and an empty{' '}
      <code>basket</code>.
    </p>
    <p>
      We use the <code>componentDidMount()</code> method on line 28 to call
      the <code>loadProducts()</code> method starting on line 32.  In a real
      world application this might be making an API call to load product
      details, but in this example we&apos;re simulating it with a delay
      before setting the state to include the sample products defined at the
      top of the file.
    </p>
    <p>
      As well as defining the array of <code>products</code> in the state
      we also build a <code>productById</code> index so we can quickly find
      a product by its <code>id</code>.  We also clear the{' '}
      <code>loading</code> flag and set <code>ready</code> to be <code>true</code>.
    </p>
    <p>
      The <code>selectProduct()</code> method on line 53 is exposed as an action
      (see the <code>static actions</code> declaration on line 20).  When
      called with a product <code>id</code> it fetches the product from the{' '}
      <code>productById</code> index and stores it in the state as <code>product</code>.
    </p>
    <p>
      The <code>addProductToBasket()</code> method / action on line 60 takes a
      product <code>id</code>, fetches the details from the{' '}
      <code>productById</code> index and adds it to the basket.  If the item
      is already in the basket we increment the <code>count</code>, otherwise
      we set it to <code>1</code>.
    </p>
    <p>
      The <code>removeProductFromBasket()</code> method / action on line 75
      removes the product from the basket.
    </p>
    <p>
      The <code>emptyBasket()</code> method / action on line 82 empties the
      basket.
    </p>
    <p>
      The <code>quantityInBasket()</code> method / action on line 87 returns
      the basket count for a particular product <code>id</code>, or 0 if
      it&apos;s not in the basket.
    </p>
    <p>
      The <code>getRenderProps()</code> method on line 97 allows us to tailor
      what we expose in the context.  By default, everything in the{' '}
      <code>context</code> returned by the <code>getContext()</code> method
      would be exposed as separate items.  This returns the current state,
      any methods exposed as <code>actions</code> and any properties passed
      to the context object (e.g. the <code>debug</code> flag).
    </p>
    <p>
      You can expose them all as separate items, but here we&apos;re imposing
      a bit more structure and bundling them all up as a single{' '}
      <code>Products</code> group.  For convenience we also
      expose the list of <code>products</code>, any <code>product</code>{' '}
      that might be currently selected, and the <code>basket</code>.
    </p>

    <p>
      The <code>Layout.jsx</code> component uses the{' '}
      <code>Products.Consumer</code> (on line 13) to subscribe to all those items that
      the <code>Products</code> context exports.  It&apos;s not interested
      in the <code>products</code>, <code>product</code> or <code>basket</code>{' '}
      but it does need to inspect the <code>ready</code> flag which is accessible
      via the <code>Products</code> passed as a property (line 4).  The component
      checks the state of the <code>Products.ready</code> flag on line 7.  If
      the flag is set (i.e. the products have been loaded) then it renders
      all of its child component.  Otherwise it displays a
      &quot;Loading...&quot; message.
    </p>

    <CodeBlock language="jsx" source={LayoutSrc} caption="Layout.jsx"/>

    <p>
      The <code>List.jsx</code> component is one of those children.
      It also uses the <code>Products.consumer</code> and receives the
      context data as the <code>Products</code> property, as well as the
      separate list of <code>products</code> and any currently
      selected <code>product</code>.  Note that we chose to expose these
      items separately as a convenience, but they are also accessible as{' '}
      <code>Products.products</code> and <code>Products.product</code>.
    </p>
    <p>
      It renders the products as a list of buttons.  Each one has an{' '}
      <code>onClick</code> handler which calls the{' '}
      <code>Products.selectProduct()</code> method to select the product.
      We compare each one to the currently selected <code>product</code> and
      set the button colour depending on it being selected or not.  We also
      add the current count of each product in the basket by calling the{' '}
      <code>Products.quantityInBasket()</code> method.
    </p>

    <CodeBlock language="jsx" source={ListSrc} caption="List.jsx"/>

    <p>
      The <code>Info.jsx</code> component consumes the context data but it
      is only interested in the currently selected <code>product</code>.
      If there is one then it displays some information about the product
      and renders the <code>Basket</code> component.  Otherwise it prompts
      the user to select a product.
    </p>

    <CodeBlock language="jsx" source={InfoSrc} caption="Info.jsx"/>

    <p>
      The <code>Basket.jsx</code> component also needs access to the context
      data.  To demonstrate the other way of accessing this data, it uses
      the <code>useProducts()</code> function, imported on line 2 and used
      on line 7.
    </p>
    <p>
      If the currently selected product is in the basket then it renders
      the <code>InBasket</code> component on line 12.  Otherwise it renders
      the <code>NotInBasket</code> component on line 13.
    </p>
    <p>
      If the basket contains any items then it also renders a button to
      empty the basket (lines 16 to 21).  Otherwise it displays a message
      saying that the basket is empty, on line 22.
    </p>

    <CodeBlock language="jsx" source={BasketSrc} caption="Basket.jsx"/>

    <p>
      The <code>InBasket.jsx</code> component displays a message telling
      the user how many of the currently select product they have in their
      basket on line 7.  It also displays buttons to add another one to the
      basket (lines 10 to 14) or to remove it from the basket altogether
      (lines 15 to 20).
    </p>

    <CodeBlock language="jsx" source={InBasketSrc} caption="InBasket.jsx"/>

    <p>
      The <code>NotInBasket.jsx</code> component displays a message telling
      the user that they don&apos;t have any in their basket (line 7) along
      with a button for them to add it to the basket (lines 10 to 14).
    </p>

    <CodeBlock language="jsx" source={NotInBasketSrc} caption="NotInBasket.jsx"/>

    <p>
      For completeness, here&apos;s the trivially simple{' '}
      <code>useProducts.jsx</code> component that simply re-exports the{' '}
      <code>Products.Use</code> function.
    </p>

    <CodeBlock language="jsx" source={UseSrc} caption="useProducts.jsx"/>
  </div>

export default Demo

