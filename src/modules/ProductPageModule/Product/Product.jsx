import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import classes from './Product.module.scss'
import { ProductCard } from '@ui/ProductCard/ProductCard'
import { useProductEureka } from '@store/useProductEureka'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Parts } from '../Parts/Parts'
import { YouTubePlayer } from '@ui/YouTubePlayer/YouTubePlayer'
import { Typography } from '@ui/Typography/Typography'
import { useMediaQuery } from '@utils/hooks/useMediaQuery'
import { LoaderPage } from '@pages/LoaderPage/LoaderPage'

export const Product = () => {
  const { getProduct, product, loading } = useProductEureka()
  const { id, productId } = useParams()
  const isTablet = useMediaQuery( '(max-width: 795px)' )
  const isMobile = useMediaQuery( '(max-width: 795px)' )

  useEffect( () => {
    getProduct( id, productId )
  }, [ getProduct,id, productId ] )

  if ( !loading ) return <LoaderPage />
  return (
    <section className={classes.product}>
      <MultiContainer>
        {product && 
            <ProductCard
              images={product.photos}
              isEureka={product.is_eureka}
              productName={product.title}
              inStock={product.in_stock}
              weight={product.weight}
              productivity={product.productivity}
              forwardSpeed={product.forward_speed}
              tank_volume={product.tank_volume}
              cleaning_path={product.cleaning_path}
            />
        }
        {product && product.spare_parts && <Parts parts={product.spare_parts} title={product.title}/>}
        {product && product.video_link && 
        <div className={classes.video}>
          <Typography variant='h2'>Видео презентация {product.title}</Typography>
          <YouTubePlayer 
            url={product.video_link}
            width='100%'
            height={isMobile ? '250px'
              : isTablet ? '400px' : '600px'
            }
          />
        </div>
        }
      </MultiContainer>
    </section>
  )
}