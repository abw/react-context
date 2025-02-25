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
        { to: '/streamlining',      text: 'Streamlining Exports' },
        { to: '/consumer-use',      text: 'Consumer vs Use' },
        { to: '/flexible-children', text: 'Flexible Children' },
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
        { to: '/typescript/constructor',  text: 'Constructor' },
        { to: '/typescript/default-props', text: 'Default Props' },
        { to: '/typescript/class-actions', text: 'Actions' },
      ]
    },
    {
      title: 'Advanced Topics',
      menu: [
        { to: '/nested',            text: 'Nested Contexts' },
      ]
    },
    {
      title: 'Version 2',
      revealable: true,
      openPath: '/version2/',
      menu: [
        { to: '/version2/introduction',      text: 'Introduction' },
        { to: '/version2/getting-started',   text: 'Getting Started' },
        { to: '/version2/simple-counter',    text: 'Simple Counter' },
        { to: '/version2/flexible-children', text: 'Flexible Children' },
        { to: '/version2/counter-class',     text: 'Counter Class' },
        { to: '/version2/products-demo',     text: 'Products and Basket' },
        { to: '/version2/streamlining',      text: 'Streamlining Exports' },
        { to: '/version2/consumer-use',      text: 'Consumer vs Use' },
        // Can't demo this in version 2 style because our code is now v3
        // { to: '/version2/nested',            text: 'Nested Contexts' },
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
