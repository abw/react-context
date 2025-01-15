const t=`import { Context } from '@/lib/index'

export class Products extends Context {
  /* START */
  static initialState = {
    ready:    false,
    loading:  false,
    products: [ ],
    basket:   { },
  }
  static debug       = false
  static debugPrefix = 'Products > '
  static debugColor  = 'orangered'
  static actions     = [
    'selectProduct',
    'addProductToBasket',
    'removeProductFromBasket',
    'quantityInBasket',
    'emptyBasket'
  ]
  /* END */
}

`;export{t as default};
