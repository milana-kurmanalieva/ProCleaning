import { MultiContainer } from '@ui/MultiContainer/MultiContainer'
import classes from './CatalogOther.module.scss'
import { Typography } from '@ui/Typography/Typography'
import { CatalogCard } from '@ui/CatalogCard/CatalogCard'
import { useEffect } from 'react'
import { useOtherCatalogStore } from '@store/useOtherCatalogStore'
import { LoaderPage } from '@pages/LoaderPage/LoaderPage'


export const CatalogOther = () => {
  const { catalog, loading, getCatalog } = useOtherCatalogStore()
  
  useEffect( () => {
    getCatalog()
  }, [ getCatalog ] )

  if ( !loading ) return <LoaderPage/>
  return (
    <section className={classes.catalogOther}>
      <MultiContainer>
        <Typography variant='h2'>Другое оборудование</Typography>
        <div className={classes.catalogCards}>
          {catalog && catalog.map( ( item ) => (
            <CatalogCard 
              key={item.id}
              image={item.photos}
              title={item.title}
              isEureka={item.is_eureka}
              idProduct={item.id}
            />
          ) )}
        </div>
      </MultiContainer>
    </section>
  )
}

