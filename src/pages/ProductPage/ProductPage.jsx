import { Product } from '@modules/ProductPageModule/Product/Product'
import { Helmet } from 'react-helmet-async'

export const ProductPage = () => {
  return (
    <main>
      <Helmet>
        <title>Pro Cleaning</title>
      </Helmet>
      <Product/>
    </main>
  )
}

