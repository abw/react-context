import React  from 'react'
import SliderSrc from '../lib/Volume/Slider.jsx?raw'
import DisplaySrc from '../lib/Volume/Display.jsx?raw'
import ConsumerSrc from '../lib/MultiContextConsumer.jsx?raw'
import UseSrc from '../lib/MultiContextUse.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'
import Link from '../site/Link.jsx'

const ConsumerUse = () =>
  <div>
    <h1>Consumer or Use?</h1>
    <p>
      You may be wondering what the difference is between using the{' '}
      <code>Consumer</code> function to wrap a component that need access to
      the context and calling the <code>Use</code> function from inside the
      component.
    </p>
    <p>
      The short answer is that there&apos;s no difference.  They both achieve
      the same end result in slightly different ways.
    </p>
    <p>
      I tend to use the <code>Consumer</code> approach if I have a simple
      component that is only returning an HTML element, i.e. it doesn&apos;t
      require curly braces around the component body.  Here&apos;s the{' '}
      <code>Slider.jsx</code> component from our{' '}
      <Link to="../streamlining" text="previous example"/> to demonstrate.
    </p>

    <h3 className="filename">Slider.jsx</h3>
    <CodeBlock language="jsx" source={SliderSrc}/>

    <p>
      The <code>Use</code> approach requires you to call the function from
      within your component.  So you&apos;ll need to put curly braces around
      your component body.  If you&apos;re doing that already then it&apos;s
      no big deal.  But if you&apos;re not then you&apos;ll have to explicitly
      add them.
    </p>

    <h3 className="filename">Display.jsx</h3>
    <CodeBlock language="jsx" source={DisplaySrc}/>

    <p>
      If a component needs to access multiple contexts then you can do this
      using the <code>Consumer</code> approach by nesting them.  For example,
      if a component needs access to the <code>Auth</code>,{' '}
      <code>Products</code> and <code>Basket</code> components then you can
      do this:
    </p>

    <h3 className="filename">ExampleComponent.jsx</h3>
    <CodeBlock language="jsx" source={ConsumerSrc}/>

    <p>
      It&apos;s a bit clunky isn&apos;t it?  In these cases it&apos;s usually
      cleaner to define named <code>useAuth()</code>, <code>useBasket()</code>{' '}
      and <code>useProducts()</code> functions (see{' '}
      <Link to="../streamlining" text="Streamlining Exports"/>) and call them
      from within the component.
    </p>

    <h3 className="filename">ExampleComponent.jsx</h3>
    <CodeBlock language="jsx" source={UseSrc}/>
  </div>

export default ConsumerUse