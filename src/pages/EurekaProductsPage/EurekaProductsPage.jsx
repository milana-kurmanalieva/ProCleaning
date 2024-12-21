import { useEurekaCatalogStore } from '@store/useEurekaCatalogStore'
import { CatalogCard } from '@ui/CatalogCard/CatalogCard'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import classes from './EurekaProductsPage.module.scss'
import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import { Typography } from '@ui/Typography/Typography'
import { LoaderPage } from '@pages/LoaderPage/LoaderPage'

export const EurekaProductsPage = () => {
  const { catalog, loading, error, getCatalog } = useEurekaCatalogStore()
  const { id } = useParams()

  useEffect( () => {
    getCatalog( id )
  }, [ getCatalog, id ] )

  if ( loading ) return <LoaderPage />

  if ( error ) {
    return (
      <main>
        <Helmet>
          <title>Каталог Eureka - Pro Cleaning</title>
        </Helmet>
        <div className={classes.catalogError}>
          <MultiContainer>
            <Typography variant='h2' className={classes.noItems}>
            Машины для данной категории не найдены
            </Typography>
          </MultiContainer>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Helmet>
        <title>Каталог Eureka</title>
      </Helmet>
      <div className={classes.catalog}>
        <MultiContainer>
          <Typography variant='h2'>{catalog && catalog[0]?.category.title}</Typography>
          <div className={classes.catalogContainer}>
            {catalog.length === 0 ? (
              <Typography variant='h3' className={classes.noItems}>
                Машины для данной категории не найдены.
              </Typography>
            ) : (
              catalog.map( ( item ) => (
                <CatalogCard
                  key={item.id}
                  image={item.photos}
                  title={item.title}
                  isEureka={true}
                  idProduct={item.id}
                />
              ) )
            )}
          </div>
        </MultiContainer>
      </div>
    </main>
  )
}
