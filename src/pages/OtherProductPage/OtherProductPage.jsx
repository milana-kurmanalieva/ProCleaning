import { LoaderPage } from '@pages/LoaderPage/LoaderPage'
import { useOtherProduct } from '@store/useOtherProduct'
import { ProductCard } from '@ui/ProductCard/ProductCard'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export const OtherProductPage = () => {
  const { getOtherProduct, productItem, loader } = useOtherProduct()
  const { productId } = useParams()

  useEffect( () => {
    getOtherProduct( productId )
  }, [ getOtherProduct, productId ] )
  
  if ( !loader ) return <LoaderPage />

  return (
    <main>
      <Helmet>
        <title>Другие оборудования - Pro Cleaning</title>
      </Helmet>
      <ProductCard
        images={productItem.photos}
        isEureka={productItem.is_eureka}
        productName={productItem.title}
        inStock={productItem.in_stock}
        characteristics={productItem.characteristics}
      />
    </main>
  )
}

