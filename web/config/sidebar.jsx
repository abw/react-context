const sidebar = {
  // title: 'React Content',
  sections: [
    {
      title: 'Getting Started',
      menu: [
        { to: '/installation',   text: 'Installation' },
        { to: '/overview',       text: 'Overview' },
      ]
    },
    {
      title: 'Functional Components',
      menu: [
        { to: '/simple-counter',    text: 'Simple Counter' },
        { to: '/flexible-children', text: 'Flexible Children' },
        { to: '/streamlining',      text: 'Streamlining Exports' },
        { to: '/consumer-use',      text: 'Consumer vs Use' },
      ]
    },
    {
      title: 'Class Based Components',
      menu: [
        { to: '/counter-class',     text: 'Counter Class' },
        { to: '/products-demo',     text: 'Products and Basket' },
      ]
    },
    {
      title: 'Typescript',
      menu: [
        { to: '/typescript/functional',   text: 'Functional Components' },
        { to: '/typescript/class-based',  text: 'Class Based Components' },
      ]
    },
    {
      title: 'Advanced Topics',
      menu: [
        { to: '/nested',            text: 'Nested Contexts' },
      ]
    },
    /*
    {
      title: 'Typescript',
      menu: [
        { to: '/typescript',        text: 'Typescript' },
      ]
    },
    */
  ]
}

export default sidebar
